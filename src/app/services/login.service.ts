import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isLogged = false;

  public whereToGo:string = "inicio";
  
  constructor() { }
}
