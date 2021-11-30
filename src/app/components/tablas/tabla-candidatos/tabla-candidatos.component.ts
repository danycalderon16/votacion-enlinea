import { Component, OnInit } from '@angular/core';
import { Candidato } from 'src/app/models/candidato.model';
import { CandidatosService } from 'src/app/services/candidatos.service';
import { TablasService } from 'src/app/services/tablas.service';
import { AdministracionComponent } from '../../administracion/administracion.component';
import { AgregarCandidatoComponent } from '../../formularios/agregar-candidato/agregar-candidato.component';

@Component({
  selector: 'app-tabla-candidatos',
  templateUrl: './tabla-candidatos.component.html',
  styleUrls: ['./tabla-candidatos.component.css']
})
export class TablaCandidatosComponent implements OnInit {
 
  candidatos:Candidato[] = [];
  cargando = false;

  constructor(private candidatoService:CandidatosService,
    private tbl:TablasService) { }

  ngOnInit() {
    this.candidatoService.getCandidatos()
        .subscribe(resp => {this.candidatos = resp;
        console.log(this.candidatos)});
  }

  editCandidato(index:number){
    console.log(this.candidatos[index])
  }
}
