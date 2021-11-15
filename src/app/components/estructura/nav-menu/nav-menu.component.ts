import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor(
    private router:Router
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

  goToVotar(){
    this.router.navigate(['puestos']);
  }
  logOut(){
    this.router.navigate(['']);
  }
  goToResultados(){
    this.router.navigate(['resultados']);
  }
}
