import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Partido } from '../models/partido.model';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {

  private url = 'https://votacion-en-linea-default-rtdb.firebaseio.com';

  constructor(private http:HttpClient) { }

  crearPartido(partido:Partido){
    return this.http.post( `${this.url}/partidos.json`,partido)
      .pipe(
        map( (resp: any) => {
          partido.id = resp.name;
          return partido;
        })
      );
  }

  actualizarPartido(partido:Partido){
    const partidoTemp = {
      ...partido
    };

    delete partidoTemp.id;

    return this.http.put( `${this.url}/partidos/${partido.id}.json`,partidoTemp)
  }

  getPartidos(){
    return this.http.get( `${this.url}/partidos.json`)
      .pipe(
        map(res => 
            this.crearArreglo(res)
        )
      );
  }

  private crearArreglo(partidosObj: any){
    const partido: Partido[] = [];

    if (partidosObj === null) {return [];}
    
    Object.keys(partidosObj).forEach(key => {
      const cand:Partido = partidosObj[key]; 
      cand.id = key;

      partido.push(cand);
    });

    return partido;
  }

}
