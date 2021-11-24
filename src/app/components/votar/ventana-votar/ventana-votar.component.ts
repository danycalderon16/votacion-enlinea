import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidato } from 'src/app/models/candidato.model';
import { CandidatosService } from 'src/app/services/candidatos.service';
import { PerfilComponent } from '../../perfil/perfil.component';
@Component({
  selector: 'app-ventana-votar',
  templateUrl: './ventana-votar.component.html',
  styleUrls: ['./ventana-votar.component.css']
})
export class VentanaVotarComponent implements OnInit {

  	candidatos: Candidato[] = [];
	presidentes: Candidato[] = [];
	senadores: Candidato[] = [];
	gobernadores: Candidato[] = [];

	constructor(private router: Router,
		private candidatoService: CandidatosService,
		private data: PerfilComponent) { }

	ngOnInit(): void {
		this.candidatoService.getCandidatos()
			.subscribe(resp => {
				this.candidatos = resp;
				console.log(this.candidatos)
			});
		console.log(this.data.dataVotante)
		console.log("hola")
	}

	goToVotarPresidente() {
		this.presidentes = this.candidatos.filter(
			candidato => candidato.puesto === 'Presidente');
		console.log(this.presidentes)
	}
	goToVotarSenador() {
		this.senadores = this.candidatos.filter(
			candidato => candidato.puesto === 'Senador');
			console.log(this.senadores)
	}
	goToVotarGobernador() {
		this.gobernadores = this.candidatos.filter(
			candidato => candidato.puesto === 'Gobernador');
			console.log(this.gobernadores)
	}

	goToCandidatos() {
		this.router.navigate(['candidatos'])
	}


}
