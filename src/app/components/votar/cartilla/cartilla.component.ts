import { Component, OnInit } from '@angular/core';
import { Candidato } from 'src/app/models/candidato.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CandidatosService } from 'src/app/services/candidatos.service';
import { ResultadoVotosService } from 'src/app/services/resultado-votos.service';
import { Votante } from 'src/app/models/votante.model';

@Component({
  selector: 'app-cartilla',
  templateUrl: './cartilla.component.html',
  styleUrls: ['./cartilla.component.css']
})

export class CartillaComponent implements OnInit {

  puesto: any
  candidatos: Candidato[] = [];
  candidatosTemp: Candidato[] = [];

  votante: Votante = {
    nombre: "Daniel Calderon",
    fechaNac: "16 nov 1999",
    domicilio: "Caoba 1121",
    localidad: "Tepic",
    curp: "CADV991116HNTLR04",
    estado: "Nayarit",
    municipio: "Tepic",
    seccion: "004",
    claveElector: "CAVD991116"
  };


  constructor(
    private route: ActivatedRoute,
    private candidatoService: CandidatosService,
    private resultados: ResultadoVotosService) {
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
  }

  votar(candidato:any) {
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
