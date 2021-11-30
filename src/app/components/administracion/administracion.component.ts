import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Candidato } from 'src/app/models/candidato.model';
import { Partido } from 'src/app/models/partido.model';
import { AuthService } from 'src/app/services/auth.service';
import { CandidatosService } from 'src/app/services/candidatos.service';
import { PartidosService } from 'src/app/services/partidos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})


export class AdministracionComponent implements OnInit {

  MOSTRAR_TABLA_PARTIDOS = true;
  MOSTRAR_TABLA_CANDIDATOS = true;
  MOSTRAR_FORM_PARTIDOS = false;
  MOSTRAR_FORM_CANDIDATOS = false;
  GUARDAR_CANDIDATO = true;
  GUARDAR_PARTIDO = true;
  UPDATE_PARTIDO = false;
  UPDATE_CANDIDATO = false;

  partidos: Partido[] = [];
  cargandoTablaPartidos = false;

  partido: Partido = new Partido();
  candidato: Candidato = new Candidato();
  puestos = [
    { nombre: 'Gobernador' },
    { nombre: 'Presidente' },
    { nombre: 'Senador' }
  ]

  candidatos: Candidato[] = [];
  cargandoTablaCandidatos = false;

  vistaPartidos: boolean
  vistaCandidatos: boolean
  // sp:boolean 

  saveUpdateC = false
  saveUpdateP = false

  constructor(private auth: AuthService,
    private partidosService: PartidosService,
    private candidatoService: CandidatosService) {
    this.vistaCandidatos = this.MOSTRAR_TABLA_CANDIDATOS;
    this.vistaPartidos = this.MOSTRAR_TABLA_PARTIDOS;
  }

  eliminarPartido(i: number) {
    const partidoTemp = this.partidos[i];
    const res = confirm("¿Está seguro de eliminar al partido '" + this.partidos[i].nombre + "'?")
    if (res) {
      this.partidosService.eliminarPartido(this.partidos[i]).subscribe(
        res => {
          Swal.fire({
            title: 'Eliminación exitosa',
            text: 'Se ha borrado el partido: ' + partidoTemp.nombre,
            icon: 'success'
          });
          this.partidosService.getPartidos()
          .subscribe(res => {
            this.partidos = res
            console.log(res)
          });
        }
      )
    }

  }

  eliminarCandidato(i: number) {
    const candidatoTemp = this.candidatos[i];
    const res = confirm("¿Está seguro de eliminar al candidato '" + this.candidatos[i].nombre + " " + this.candidatos[i].apellido + "'?")
    if (res) {
      this.candidatoService.elimicarCandidato(this.candidatos[i]).subscribe(
        res => {
          Swal.fire({
            title: 'Eliminación exitosa',
            text: 'Se ha borrado el candidato: ' + candidatoTemp.nombre + " " + candidatoTemp.apellido,
            icon: 'success'
          });
          this.candidatoService.getCandidatos()
          .subscribe(resp => {
            this.candidatos = resp;
            console.log(this.candidatos)
          });
        }
      )
    }
  }

  ngOnInit(): void {
    this.partidosService.getPartidos()
      .subscribe(res => {
        this.partidos = res
        console.log(res)
      });
    this.candidatoService.getCandidatos()
      .subscribe(resp => {
        this.candidatos = resp;
        console.log(this.candidatos)
      });
  }

  updatePartido(index: number) {
    this.partido = this.partidos[index];
    this.saveUpdateP = this.UPDATE_PARTIDO;
    this.vistaPartidos = !this.vistaPartidos;
  }

  updateCandidato(index: number) {
    this.candidato = this.candidatos[index];
    this.saveUpdateC = this.UPDATE_CANDIDATO;
    this.vistaCandidatos = !this.vistaCandidatos;;
  }

  changeViewCandidatos() {
    this.vistaCandidatos = !this.vistaCandidatos;
    this.candidato = new Candidato();
    this.saveUpdateC = this.GUARDAR_CANDIDATO;
  }

  changeViewPartidos() {
    this.vistaPartidos = !this.vistaPartidos;
    this.partido = new Partido();
    this.saveUpdateP = this.GUARDAR_PARTIDO;
  }

  guardarPartido(form: NgForm) {
    if (form.invalid) {
      console.log('Formularion invalido');
      Swal.fire({
        icon: 'error',
        title: 'Formulario Invalido',
        text: 'Rellene todos los campos',
      })
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false,
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if (this.partido.id) {
      peticion = this.partidosService.actualizarPartido(this.partido);

    } else {
      peticion = this.partidosService.crearPartido(this.partido);
    }

    peticion.subscribe(resp => {
      Swal.fire({
        title: this.partido.nombre,
        text: this.saveUpdateP ? "Se guardo correctamente" : "Se actualizó correctamente",
        icon: 'success'
      });
      this.partidosService.getPartidos()
      .subscribe(res => {
        this.partidos = res
        console.log(res)
      });
      this.vistaPartidos = this.MOSTRAR_TABLA_PARTIDOS
    });

  }

  logOut() {
    if (confirm("¿Está seguro de cerrar sesión como administrador?"))
      this.auth.logoutAdmin();
  }

  guardarCandidato(form: NgForm) {
    if (form.invalid) {
      console.log('Formularion invalido');
      Swal.fire({
        icon: 'error',
        title: 'Formulario Invalido',
        text: 'Rellene todos los campos',
      })
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false,
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if (this.candidato.id) {
      peticion = this.candidatoService.actualizarCandidato(this.candidato);
    } else {
      const nombre = this.candidato.partido;
      console.log(nombre)
      this.partidos.forEach(partido => {
        if (partido.nombre === nombre)
          this.candidato.imagenPartido = partido.imagen;
      });


      peticion = this.candidatoService.crearCandidato(this.candidato);
    }

    peticion.subscribe(resp => {
      Swal.fire({
        title: this.candidato.nombre + " " + this.candidato.apellido,
        text: this.saveUpdateP ? "Se guardo correctamente" : "Se actualizó correctamente",
        icon: 'success'
      });
      this.candidatoService.getCandidatos()
      .subscribe(resp => {
        this.candidatos = resp;
        console.log(this.candidatos)
      });
      this.vistaPartidos = this.MOSTRAR_TABLA_PARTIDOS
    });

  }
}
