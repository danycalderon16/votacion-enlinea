import { Component, OnInit } from '@angular/core';
import { Candidato } from 'src/app/models/candidato.model';
import { CandidatosService } from 'src/app/services/candidatos.service';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent implements OnInit {

  candidatos: Candidato[] = [];

  constructor(private candidatoService:CandidatosService) { }

  ngOnInit() {
    this.candidatoService.getCandidatos()
        .subscribe(resp => {this.candidatos = resp;
        console.log(this.candidatos)});
  }

}
