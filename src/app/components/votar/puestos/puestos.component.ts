import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Candidato } from 'src/app/models/candidato.model';
import { CandidatosService } from 'src/app/services/candidatos.service';

@Component({
	selector: 'app-puestos',
	templateUrl: './puestos.component.html',
	styleUrls: ['./puestos.component.css']
})
export class PuestosComponent implements OnInit {

	candidatos: Candidato[] = [];
	presidentes: Candidato[] = [];
	senadores: Candidato[] = [];
	gobernadores: Candidato[] = [];

	constructor(private router: Router,
		private activateRoute:ActivatedRoute,
		private candidatoService: CandidatosService) { }

	ngOnInit(): void {
		
	}

	goToVotarPresidente() {
		this.presidentes = this.candidatos.filter(
			candidato => candidato.puesto === 'Presidente');
		console.log(this.presidentes)
		this.router.navigate(['/cartilla',"Presidente"])
	}
	goToVotarSenador() {
		this.router.navigate(['/cartilla',"Senador"])
	}
	goToVotarGobernador() {
	    this.router.navigate(['/cartilla',"Gobernador"])
	}

	goToCandidatos() {
		this.router.navigate(['candidatos'])
	}

}
