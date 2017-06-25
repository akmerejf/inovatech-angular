import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../login/user.interface';
import { emailValidator, matchingFields } from './validators';
import {Router} from '@angular/router';

declare var swal: any;
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  user: FormGroup;
  submited: Boolean;
    

  constructor(private fb: FormBuilder, private router: Router) { 
   
  }

  ngOnInit() {

    this.submited = false;
    this.user = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      account: this.fb.group({
        email: new FormControl('',  Validators.compose([Validators.required,  emailValidator])),
        confirm: new FormControl('',  Validators.compose([Validators.required,  emailValidator])),
      },  { validator: matchingFields('email', 'confirm')}),
      passwords: this.fb.group({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', Validators.required)
      }, { validator: matchingFields('password', 'confirmPassword')})
    });
  }

  usuarioCriado(){
    this.router.navigate(['/']);
    // this.router.navigate(['/']);
  }


  onSubmit() {
    // Momento de passar valores para o backend;
    console.log(this.user.value, this.user.valid);
    
    
  }

  
}
