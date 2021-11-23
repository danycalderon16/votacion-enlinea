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
 

  votante:Votante = {};

  constructor(private data:DataService,
      private auth:AuthService ) { }

  ngOnInit(): void {
    this.data.getCandidatos(getAuth().currentUser?.uid)
      .subscribe(resp=> {
        this.votante = resp
      })
  }

}
