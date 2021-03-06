import { Component, OnInit } from '@angular/core';
import { Votante } from 'src/app/models/votante.model';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

import { getAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {
 

  public dataVotante:Votante = {};

  constructor(private data:DataService,
      private auth:AuthService ) { }

  ngOnInit(): void {
    this.data.getUsuario(getAuth().currentUser?.uid)
      .subscribe(resp=> {
        this.dataVotante = resp
      })
  }
  logOut(){
    if(confirm("¿"+this.dataVotante.nombre+" está seguro de cerrar sesión? ")) {
      this.auth.logout()
    }
  }

}
