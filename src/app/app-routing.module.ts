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

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'puestos',component:PuestosComponent},
  {path:'perfil/:id',component:PerfilComponent},
  {path:'casillas',component:CasillasFisicasComponent},
  {path:'candidatos/:puesto',component:CandidatosComponent},
  {path:'cartilla/:puesto',component:CartillaComponent},
  {path:'admon',component:AdministracionComponent},
  {path:'resultados',component:ResultadosComponent},
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
