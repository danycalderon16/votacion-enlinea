import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { } from '@angular/fire'
import { map } from 'rxjs/operators';
import { Votante } from '../models/votante.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private url = 'https://votacion-en-linea-default-rtdb.firebaseio.com';
  
  constructor( private http:HttpClient) { }

  getCandidatos(uid:any){
    return this.http.get( `${this.url}/usuarios/${uid}.json`);
  }
  private crearArreglo(votanteObj: any){
    const vatante: Votante[] = [];

    if (votanteObj === null) {return [];}
    
    Object.keys(votanteObj).forEach(key => {
      const vot:Votante = votanteObj[key]; 
      // vot.id = key;

      vatante.push(vot);
    });

    return vatante;
  }

}
