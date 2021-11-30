import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { Candidato } from 'src/app/models/candidato.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CandidatosService } from 'src/app/services/candidatos.service';
import { ResultadoVotosService } from 'src/app/services/resultado-votos.service';
import { Votante } from 'src/app/models/votante.model';
import { PerfilComponent } from '../../perfil/perfil.component';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

export interface DialogData {
  curp: string;
}

/**
 * @title Dialog Overview
 */

@Component({
  selector: 'app-cartilla',
  templateUrl: './cartilla.component.html',
  styleUrls: ['./cartilla.component.css']
})

export class CartillaComponent implements OnInit {

  puesto: any
  candidatos: Candidato[] = [];
  candidatosTemp: Candidato[] = [];

  votante: Votante = {};

  curp: string = ""

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private candidatoService: CandidatosService,
    private resultados: ResultadoVotosService,
    private data:DataService,
    private auth:AuthService,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.puesto = this.route.snapshot.paramMap.get('puesto');
    this.candidatoService.getCandidatos()
      .subscribe(resp => {
        resp.forEach(element => {
          if (element.puesto === this.puesto)
            this.candidatos.push(element);
        });
       });
      this.data.getUsuario(this.auth.getCurrentUser()).subscribe(res => this.votante = res)   
  }

  votar(candidato:any) {
    const dialogRef = this.dialog.open(ConfimationDialog, {
      width: '250px',
      data: { passwordAdmin: this.curp }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.curp = result;
      this.chechCurp(result)
      console.log(result);
    });
  }

  chechCurp(result: any) {
    if(result===this.votante.curp){
      Swal.fire(
        'Voto registrado',
        'Recuerde que su voto es secreto',
        'success'
      )
      this.router.navigate(['resultados'])
    }else{
      Swal.fire({
        icon: 'error',
        title: 'CURP INCORRECTA',
        text: 'Asegurese de ingresar los datos correctamente',
      })
      return;
    }
  }
  

}


@Component({
  selector: 'confimation-modal',
  templateUrl: 'confimation-modal.component.html',
})
export class ConfimationDialog {

  constructor(
    public dialogRef: MatDialogRef<ConfimationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private host: ElementRef
  ) { }
  
  ngAfterViewInit() {
    this.host.nativeElement.focus();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

