import { Component, OnInit } from '@angular/core';
import { Candidato } from 'src/app/models/candidato.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CandidatosService } from 'src/app/services/candidatos.service';
import { ResultadoVotosService } from 'src/app/services/resultado-votos.service';
import { Votante } from 'src/app/models/votante.model';
import { PerfilComponent } from '../../perfil/perfil.component';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cartilla',
  templateUrl: './cartilla.component.html',
  styleUrls: ['./cartilla.component.css']
})

export class CartillaComponent implements OnInit {

  puesto: any
  candidatos: Candidato[] = [];
  candidatosTemp: Candidato[] = [];

  votante: Votante = {};


  constructor(
    private route: ActivatedRoute,
    private candidatoService: CandidatosService,
    private resultados: ResultadoVotosService,
    private data:DataService,
    private auth:AuthService) {
  }

  ngOnInit(): void {
    this.puesto = this.route.snapshot.paramMap.get('puesto');
    this.candidatoService.getCandidatos()
      .subscribe(resp => {
        resp.forEach(element => {
          if (element.puesto === this.puesto)
            this.candidatos.push(element);
        });
       });
      this.data.getUsuario(this.auth.getCurrentUser()).subscribe(res => this.votante = res)
      
  }

  votar(candidato:any) {
    console.log(this.votante)
    if (this.puesto === "Gobernador") {
      this.resultados.votarGobernador(this.votante,candidato)
    }
    if (this.puesto === "Presidente") {
      this.resultados.votarSenador(this.votante,candidato)
    }
    if (this.puesto === "Senador") {
      this.resultados.votarPresidente(this.votante,candidato)
    }
  }

}
