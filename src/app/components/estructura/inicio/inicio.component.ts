import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router: Router,
    private login:LoginService,
    private auth:AuthService) { }

  ngOnInit(): void {
  }

  goLogin(page:string){
    this.login.whereToGo = page
    if(this.login.isLogged)
      this.auth.redirigir()
    else{
      if (page == 'mapas') {
        console.log("mapas")
        this.router.navigate(['mapas'])    
      }
      this.router.navigate(['login'])      
    }
  }

}
