import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule} from '@swimlane/ngx-charts'
import { ChartsModule } from 'ng2-charts';

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
import { environment } from '../environments/environment';

import { AngularFireModule} from '@angular/fire/compat'
import { provideAuth, getAuth } from '@angular/fire/auth';

import {MaterialExampleModule} from '../material.module';
import {DialogOverviewExampleDialog} from './components/login/login.component';
import {ConfimationDialog} from './components/votar/cartilla/cartilla.component'
import { InicioComponent } from './components/estructura/inicio/inicio.component';

@NgModule({
  declarations: [
    DialogOverviewExampleDialog,
    ConfimationDialog,
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
    InicioComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialExampleModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebase),
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
     provideAuth(() => getAuth()),
    // provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent, LoginComponent]
})
export class AppModule { }
