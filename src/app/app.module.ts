import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule} from '@swimlane/ngx-charts'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http'

import { HeaderComponent } from './components/estructura/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/estructura/footer/footer.component';
import { NavMenuComponent } from './components/estructura/nav-menu/nav-menu.component';
import { PuestosComponent } from './components/votar/puestos/puestos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CasillasFisicasComponent } from './components/casillas-fisicas/casillas-fisicas.component';
import { CandidatosComponent } from './components/candidatos/candidatos.component';
import { CartillaComponent } from './components/votar/cartilla/cartilla.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { TablaCandidatosComponent } from './components/tablas/tabla-candidatos/tabla-candidatos.component';
import { AgregarCandidatoComponent } from './components/formularios/agregar-candidato/agregar-candidato.component';
import { AgregarPartidoComponent } from './components/formularios/agregar-partido/agregar-partido.component';
import { TablaPartidosComponent } from './components/tablas/tabla-partidos/tabla-partidos.component';
import { VentanaVotarComponent } from './components/votar/ventana-votar/ventana-votar.component';
import { ResultadosComponent } from './components/votar/resultados/resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    NavMenuComponent,
    PuestosComponent,
    PerfilComponent,
    CasillasFisicasComponent,
    CandidatosComponent,
    CartillaComponent,
    AdministracionComponent,
    TablaCandidatosComponent,
    AgregarCandidatoComponent,
    AgregarPartidoComponent,
    TablaPartidosComponent,
    VentanaVotarComponent,
    ResultadosComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
