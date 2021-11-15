import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})


export class AdministracionComponent implements OnInit {
  
  showPartidos:boolean = true;
  showCandidatos:boolean = true;

  constructor() { }


  ngOnInit(): void {
  }

  changeViewCandidatos(){
    this.showCandidatos = !this.showCandidatos;
  }

  changeViewPartidos(){
    this.showPartidos = !this.showPartidos;
  }

}
