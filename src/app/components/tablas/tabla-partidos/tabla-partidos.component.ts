import { Component, OnInit } from '@angular/core';
import { Partido } from 'src/app/models/partido.model';
import { PartidosService } from 'src/app/services/partidos.service';

@Component({
  selector: 'app-tabla-partidos',
  templateUrl: './tabla-partidos.component.html',
  styleUrls: ['./tabla-partidos.component.css']
})
export class TablaPartidosComponent implements OnInit {

  partidos: Partido[] = [];
  cargando = false;

  constructor(private partidosService:PartidosService) { }

  ngOnInit(): void {
    this.partidosService.getPartidos()
      .subscribe(res => this.partidos = res);
  }

}
