import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = "diegolainez@ittepic.com"
  password:string = "diegolainez"

  constructor(private router:Router,
      private authService:AuthService,
      //private getAuthFm:AngularFireModule
    ) { }

  ngOnInit(): void {
  }

  login(){
    if(this.email==="" || this.password===""){
      Swal.fire({
        icon: 'error',
        title: 'Formulario Invalido',
        text: 'Rellene todos los campos',
      })
      return;
    }
    
    this.authService.login(this.email,this.password);
    
  }
  goAdminPage(){
    this.router.navigate(['admon'])
  }
}
