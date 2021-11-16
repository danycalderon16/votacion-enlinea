import { Component, OnInit } from '@angular/core';
import { ResultadoVotosService } from 'src/app/services/resultado-votos.service';
import { CandidatosService } from 'src/app/services/candidatos.service';
import { Candidato } from 'src/app/models/candidato.model';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

interface DataValues {
  name: string;
  value: number;
}

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit{
  public options: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
  };

  nombreSen:string [] = []
  nombreGob:string [] = []
  nombrePre:string [] = []

  
  public colores = [
    {
      backgroundColor: ['rgba(127, 255, 0, 0.5)', 'rgba(100, 149, 237, 0.5)', 'rgba(0, 139, 139, 0.5)','rgba(139, 0, 139, 0.5)','rgba(255, 215, 0, 0.5,0.5)','rgba(173, 216, 230,0.5)'],
    },
  ];

  public polarAreaChartLabelsSen: Label[] = [];
  public polarAreaChartDataSen: SingleDataSet = [];
  public polarAreaChartLabelsPre: Label[] = [];
  public polarAreaChartDataPre: SingleDataSet = [];
  public polarAreaChartLabelsGob: Label[] = [];
  public polarAreaChartDataGob: SingleDataSet = [];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';

  constructor(private dataService: ResultadoVotosService,
    private candidatosService: CandidatosService) {
    //Object.assign(this, { single });
  }

  ngOnInit(): void {
    this.candidatosService.getCandidatos().subscribe(s =>{
      s.forEach(e => {
          if(e.puesto === 'Senador'){
            this.nombreSen.push(e.nombre +" "+e.apellido) 
          }       
          if(e.puesto === 'Gobernador'){
            this.nombreGob.push(e.nombre +" "+e.apellido) 
          }       
          if(e.puesto === 'Presidente'){
            this.nombrePre.push(e.nombre +" "+e.apellido) 
          }       
        });
    });
    

    setTimeout(() => {      
      this.nombreSen.forEach(e =>{
        this.polarAreaChartDataSen.push(Math.round(Math.random() * 1000))
        this.polarAreaChartLabelsSen.push(e)
      })      

      this.nombrePre.forEach(e =>{
        this.polarAreaChartDataPre.push(Math.round(Math.random() * 1000))
        this.polarAreaChartLabelsPre.push(e)
      })      

      this.nombreGob.forEach(e =>{
        this.polarAreaChartDataGob.push(Math.round(Math.random() * 1000))
        this.polarAreaChartLabelsGob.push(e)
      })      

    }, 1000);

  
  }
}