import { Component, ViewChild } from '@angular/core';
import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: '',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
	@ViewChild(LoginComponent) login: LoginComponent

  constructor(public dialogRef: MdDialogRef<any>) { }
}