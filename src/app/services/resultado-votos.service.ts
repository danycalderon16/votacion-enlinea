import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Votante } from '../models/votante.model';
import { CandidatosService } from './candidatos.service';

interface DataValues {
  name: string;
  value: number;
}




@Injectable({
  providedIn: 'root'
})
export class ResultadoVotosService {

  dataGob: DataValues[] = []
  dataSen: DataValues[] = []
  dataPre: DataValues[] = []

  private url = 'https://votacion-en-linea-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient,
    private candidatosService: CandidatosService) { }

  votarGobernador(votante: Votante, candidato: string) {
    return this.http.post(`${this.url}/votos/gobernador/${candidato}.json`, votante)
      .subscribe(response => { console.log(response); })
  }

  getResultadosGober() {
    return this.http.get(`${this.url}/votos/gobernador.json`)
      .pipe(
        map(res => {
          console.log(res)
        }
        ));
  }

  votarSenador(votante: Votante, candidato: string) {
    return this.http.post(`${this.url}/votos/senador/${candidato}.json`, votante)
      .subscribe(response => { console.log(response); })
  }

  votarPresidente(votante: Votante, candidato: string) {
    return this.http.post(`${this.url}/votos/presidente/${candidato}.json`, votante)
      .subscribe(response => { console.log(response); })
  }

  createDataGober() {
    this.candidatosService.getCandidatos().subscribe(res => {
      res.forEach(element => {
        if (element.puesto === "Gobernador") {
          let data = {
            name: element.nombre + " " + element.apellido,
            value: Math.random() * 1000
          }
          this.dataGob.push(data);
          console.log(this.dataGob)
          console.log("hola")
        }
      })
    })
    return this.dataGob;
  }

  get sendData() {
    return this.data;
  }
  private data = [
    {
      "name": "Germany",
      "value": 2.2222222222
    },
    {
      "name": "USA",
      "value": 4
    },
    {
      "name": "France",
      "value": 8
    },
    {
      "name": "UK",
      "value": 16
    }
  ];

}
