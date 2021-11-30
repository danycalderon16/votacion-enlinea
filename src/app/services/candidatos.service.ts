import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Candidato } from '../models/candidato.model';

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {

  private url = 'https://votacion-en-linea-default-rtdb.firebaseio.com';

  constructor( private http:HttpClient) { }

  elimicarCandidato(candidato:Candidato){
    return this.http.delete( `${this.url}/candidatos/${candidato.id}.json`)
  }

  crearCandidato(candidato:Candidato){
    return this.http.post( `${this.url}/candidatos.json`,candidato)
      .pipe(
        map( (resp: any) => {
          candidato.id = resp.name;
          return candidato;
        })
      );
  }

  actualizarCandidato(candidato:Candidato){
    const candidatoTemp = {
      ...candidato
    };

    delete candidatoTemp.id;

    return this.http.put( `${this.url}/candidatos/${candidato.id}.json`,candidatoTemp)
  }

  getCandidatos(){
    return this.http.get( `${this.url}/candidatos.json`)
      .pipe(
        map(res => 
            this.crearArreglo(res)
        )
      );
  }

  private crearArreglo(candidatosObj: any){
    const candidato: Candidato[] = [];

    if (candidatosObj === null) {return [];}
    
    Object.keys(candidatosObj).forEach(key => {
      const cand:Candidato = candidatosObj[key]; 
      cand.id = key;

      candidato.push(cand);
    });

    return candidato;
  }
}
