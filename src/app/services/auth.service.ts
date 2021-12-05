import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import 'firebase/auth'
import { getAuth } from '@angular/fire/auth';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth,
    private loginService: LoginService,
    private router: Router) { }

  logout() {
    this.afauth.signOut().catch(err => {
      console.log("error al salir")
    })
      .then(res => {
        console.log(res);
        this.router.navigate(['login']);
        this.loginService.isLogged = false;
      })
  }

  login(email: string, password: string) {
    this.afauth.signInWithEmailAndPassword(
      email,
      password
    )
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Datos invalidos',
          text: 'Revise bien sus datos',
        })
        return;
      })
      .then(res => {
        console.log(this.loginService.whereToGo)

        this.redirigir();

        this.loginService.isLogged = true;
      })
  }

  redirigir() {
    if (this.loginService.whereToGo === 'inicio')
      this.router.navigate(['perfil', getAuth().currentUser?.uid])
    if (this.loginService.whereToGo === 'perfil')
      this.router.navigate(['perfil', getAuth().currentUser?.uid])
    if (this.loginService.whereToGo === 'puestos')
      this.router.navigate(['puestos'])
    if (this.loginService.whereToGo === 'resultados')
      this.router.navigate(['resultados'])
    if (this.loginService.whereToGo === 'mapas')
      this.router.navigate(['mapas', getAuth().currentUser?.uid])//cambiar despues
  }

  loginAdmin() {
    this.loginService.isLoggedAdmin = true;
  }

  logoutAdmin(){
    this.loginService.isLoggedAdmin = false;
    this.router.navigate(['login']);
  }

  getCurrentUser() {
    return getAuth().currentUser?.uid
  }

}
