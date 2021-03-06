import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth } from '@firebase/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor(
    private router:Router,
    private auth:AuthService
  ) { }

  ngOnInit(): void {
  }

  goToAlcance(){
    
  }

  goToCasillass(){
    this.router.navigate(['casillas']);
  }

  goToCandidatos(){
    this.router.navigate(['candidatos']);
  }

  goToPerfil(){
    this.router.navigate(['perfil',getAuth().currentUser?.uid]);
  }
  goToVotar(){
    this.router.navigate(['puestos']);
  }
  goToResultados(){
    this.router.navigate(['resultados']);
  }
}
