import { Component, OnInit } from '@angular/core';
import { ResultadoVotosService } from 'src/app/services/resultado-votos.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {
  view: [number, number] = [900, 400];

  
  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;


  constructor(private dataService: ResultadoVotosService) {
    //Object.assign(this, { single });
  }
  get single() {
    return this.dataService.getCountsVotos;
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}