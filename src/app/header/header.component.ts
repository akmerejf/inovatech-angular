import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { LoginComponent } from '../login/login.component';
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  login: LoginComponent;
  constructor() { }

  ngOnInit() {

  	$(".button-collapse").sideNav({
  		closeOnClick: true
  	});
    
  }

  

}
