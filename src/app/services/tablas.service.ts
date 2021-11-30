import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TablasService {

  showPartidos:boolean = true;
  showCandidatos:boolean = true;

  constructor() { }
}
