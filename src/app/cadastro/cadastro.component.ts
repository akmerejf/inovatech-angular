import { Component, OnInit } from '@angular/core';
import { User } from '../login/user';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  user: User;
  users: Array<User>;

  constructor() {
  	this.users = [
  	new User(
  		'savio',
  		'savio@gmail.com',
  		'123123'),
  	new User(
  		'akmere',
  		'akmere@gmail.com',
  		'123123'),
  	new User(
  		'bitar',
  		'bitar@gmail.com',
  		'123123')
  	];
   }

  ngOnInit() {
  	this.user = new User('','','');

  	console.log(this.users);
  }

  
}
