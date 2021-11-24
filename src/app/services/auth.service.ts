import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import 'firebase/auth'
import { getAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged = false;

  constructor(private afauth: AngularFireAuth,
    private router:Router) { }

  logout(){
    this.afauth.signOut().catch(err =>{
      console.log("error al salir")
    })
    .then(res =>{
      console.log(res);
      this.router.navigate(['login']);
      this.isLogged = false;
    })
  }

  login(email:string, password:string){
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
      this.router.navigate(['perfil',getAuth().currentUser?.uid])
      this.isLogged = true;
    })
  }

  loginAdmin(){
    this.isLogged = true;
  }

  getCurrentUser(){
    return getAuth().currentUser?.uid
  }
}
