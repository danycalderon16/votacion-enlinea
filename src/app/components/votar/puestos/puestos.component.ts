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

	verCartilla(puesto:string) {
		this.router.navigate(['/cartilla',puesto])
	}

	verCandidatos(puesto:string) {
		this.router.navigate(['/candidatos', puesto])
	}

}
