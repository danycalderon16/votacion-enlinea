import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  passwordAdmin: string;
}

/**
 * @title Dialog Overview
 */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  passwordAdmin: string = "";

  constructor(private router: Router,
    private authService: AuthService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { passwordAdmin: this.passwordAdmin }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.password = result;
      this.goAdminPage()
    });
  }

  login() {
    if (this.email === "" || this.password === "") {
      Swal.fire({
        icon: 'error',
        title: 'Formulario Invalido',
        text: 'Rellene todos los campos',
      })
      return;
    }

    this.authService.login(this.email, this.password);

  }
  goAdminPage() {
    this.authService.loginAdmin();
    console.log(this.password)
    if (this.password === "admin") {
      this.router.navigate(['admon'])
      return
    }
    Swal.fire({
      icon: 'error',
      title: 'Constraseña invalida',
    })
    return;
  }
}


@Component({
  selector: 'login_modal_admin',
  templateUrl: 'login_modal_admin.component.html',
  styleUrls: ['./login_modal.component.css']
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
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