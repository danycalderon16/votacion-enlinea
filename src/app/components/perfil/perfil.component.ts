import { Component, OnInit } from '@angular/core';
import { Votante } from 'src/app/models/votante.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  votante:Votante = {
    nombre:"Daniel Calderon",
    fechaNac:"16 nov 1999",
    domicilio:"Caoba 1121",
    localidad:"Tepic",
    curp:"CADV991116HNTLR04",
    estado:"Nayarit",
    municipio:"Tepic",
    seccion:"004",
    claveElector:"CAVD991116"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
