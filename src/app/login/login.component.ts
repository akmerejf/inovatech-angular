import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { User } from './user';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dialogRef: MdDialogRef<any>;
  user: User = new User();

  constructor(public dialog: MdDialog) {}

  ngOnInit() {
  }


  open(key) {
    this.dialogRef = this.dialog.open(DialogComponent);

    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
    });
  }

}
