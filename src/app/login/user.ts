import { Input } from '@angular/core';

export class User {

	@Input() nome: string;
  	@Input() email: string;
 	@Input() senha: string;

 	constructor(nome: string, email: string, senha: string){
 		this.nome = nome;
 		this.email = email;
 		this.senha = senha;
 	}

}