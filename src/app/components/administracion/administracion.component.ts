import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})


export class AdministracionComponent implements OnInit {
  
  showPartidos:boolean = true;
  showCandidatos:boolean = true;

  constructor(private auth:AuthService) { }


  ngOnInit(): void {
  }

  changeViewCandidatos(){
    this.showCandidatos = !this.showCandidatos;
  }

  changeViewPartidos(){
    this.showPartidos = !this.showPartidos;
  }

  logOut(){
    if(confirm("¿Está seguro de cerrar sesión como administrador?")) 
      this.auth.logoutAdmin();
  }
}
