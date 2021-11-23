import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidato } from 'src/app/models/candidato.model';
import { CandidatosService } from 'src/app/services/candidatos.service';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent implements OnInit {

  candidatos: Candidato[] = [];
  puesto:any;

  constructor(private candidatoService:CandidatosService,
    private route: ActivatedRoute,) { }

  ngOnInit() {
    this.puesto = this.route.snapshot.paramMap.get('puesto');
    this.candidatoService.getCandidatos()
      .subscribe(resp => {
        resp.forEach(element => {
          if (element.puesto === this.puesto)
            this.candidatos.push(element);
      });
    });
  }

}
