import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Partido } from 'src/app/models/partido.model';
import { PartidosService } from 'src/app/services/partidos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-partido',
  templateUrl: './agregar-partido.component.html',
  styleUrls: ['./agregar-partido.component.css']
})
export class AgregarPartidoComponent implements OnInit {

  partido: Partido = new Partido();
  

  constructor(private partidosService:PartidosService) { }

  ngOnInit(): void {
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

    if(this.partido.id){
      peticion = this.partidosService.actualizarPartido(this.partido);
    }else{
      peticion = this.partidosService.crearPartido(this.partido);
    }

    peticion.subscribe(resp =>{
      Swal.fire({
        title:this.partido.nombre,
        text:"Se actualizó correctamente",
        icon:'success'
      });      
    });

  }
}
