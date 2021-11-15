import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Votante } from '../models/votante.model';

interface Votos {
  candidato: string;
  // puesto:string,
  //partido:string,
  votos: number;
}


@Injectable({
  providedIn: 'root'
})
export class ResultadoVotosService {

  private url = 'https://votacion-en-linea-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) { }

  votarGobernador(votante: Votante) {
    console.log(votante);
    return this.http.post(`${this.url}/votos/gobernador.json`, votante)
      .subscribe(response => {console.log(response);})
  }

  votarSenador(votante: Votante) {
    console.log(votante);
    return this.http.post(`${this.url}/votos/senador.json`, votante)
      .pipe(
        map((resp: any) => {
          console.log(resp)
          return votante;
        })
      );
  }

  votarPresidente(votante: Votante) {
    console.log(votante);
    return this.http.post(`${this.url}/votos/presidente.json`, votante)
      .pipe(
        map((resp: any) => {
          console.log(resp)
          return votante;
        })
      );
  }


  private data = [
    {
      "name": "Germany",
      "value": 2
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

  get getCountsVotos() {
    return this.data;
  }
}
