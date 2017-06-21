import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dialogRef: MdDialogRef<any>;
  login: LoginComponent;
  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  open(key) {
    
    this.dialogRef = this.dialog.open(DialogComponent);

    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
    });
  }

}
