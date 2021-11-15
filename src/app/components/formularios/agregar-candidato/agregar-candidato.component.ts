import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Candidato } from 'src/app/models/candidato.model';
import { Partido } from 'src/app/models/partido.model';
import { CandidatosService } from 'src/app/services/candidatos.service';
import { PartidosService } from 'src/app/services/partidos.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-candidato',
  templateUrl: './agregar-candidato.component.html',
  styleUrls: ['./agregar-candidato.component.css']
})
export class AgregarCandidatoComponent implements OnInit {

  candidato: Candidato = new Candidato();
  
  partidos: Partido[] = [];
  puestos = [
    {nombre:'Gobernador'},
    {nombre:'Presidente'},
    {nombre:'Senador'}
  ]

  constructor(private candidatoService:CandidatosService,
    private partidosService: PartidosService) { }

  ngOnInit(): void {
    this.partidosService.getPartidos()
      .subscribe(res => {this.partidos = res
      console.log(res)});
  }

  guardar( form: NgForm){
    if(form.invalid){
      console.log('Formularion invalido');
      Swal.fire({
        icon: 'error',
        title: 'Formulario Invalido',
        text: 'Rellene todos los campos',
      })
      return;
    }

    Swal.fire({
      title:'Espere',
      text:'Guardando información',
      icon: 'info',
      allowOutsideClick: false,
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if(this.candidato.id){
      peticion = this.candidatoService.actualizarCandidato(this.candidato);
    }else{
      const nombre = this.candidato.partido;
      console.log(nombre)
      this.partidos.forEach(partido => {
          if(partido.nombre === nombre)
            this.candidato.imagenPartido = partido.imagen;
      });

      
      peticion = this.candidatoService.crearCandidato(this.candidato);
    }

    peticion.subscribe(resp =>{
      Swal.fire({
        title:this.candidato.nombre +" "+ this.candidato.apellido,
        text:"Se actualizó correctamente",
        icon:'success'
      });      
    });

  }
}
