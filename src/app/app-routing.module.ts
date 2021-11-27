import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { CandidatosComponent } from './components/candidatos/candidatos.component';
import { CartillaComponent } from './components/votar/cartilla/cartilla.component';
import { CasillasFisicasComponent } from './components/casillas-fisicas/casillas-fisicas.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PuestosComponent } from './components/votar/puestos/puestos.component';
import { ResultadosComponent } from './components/votar/resultados/resultados.component';

import {AuthGuard} from './guard/auth.guard'
import { InicioComponent } from './components/estructura/inicio/inicio.component';
import { AdminGuard } from './guard/admin.guard';

const routes: Routes = [
  {path:'',component:InicioComponent,},
  {path:'inicio',component:InicioComponent,},
  {path:'login',component:LoginComponent},
  {path:'puestos',component:PuestosComponent,canActivate:[AuthGuard]},
  {path:'perfil/:id',component:PerfilComponent,canActivate:[AuthGuard]},
  {path:'casillas',component:CasillasFisicasComponent,canActivate:[AuthGuard]},
  {path:'candidatos/:puesto',component:CandidatosComponent,canActivate:[AuthGuard]},
  {path:'cartilla/:puesto',component:CartillaComponent,canActivate:[AuthGuard]},
  {path:'admon',component:AdministracionComponent,canActivate:[AdminGuard]},
  {path:'resultados',component:ResultadosComponent,canActivate:[AuthGuard]},
  {path:'**',component:InicioComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
