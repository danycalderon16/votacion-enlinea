
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginServ:LoginService,
    private authSer:AuthService,
    private route:Router) { }

  ngOnInit(): void {
  }

  loged(){
    console.log(this.loginServ.isLogged);
    console.log(this.authSer.getCurrentUser())
    this.route.navigate(['inicio']);
  }
}
