import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm : FormGroup;

  
  constructor(fb: FormBuilder) {
     this.myForm = fb.group({
      // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
      'email': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      'senha': ''
    })


  	
  }

  ngOnInit() { 
        	
   
  }

  onFormSubmit($event, uf){
    $event.preventDefault();
    console.log('Form Data: ');
    console.log(uf);
    if (this.myForm.invalid) {
      console.log('tá morto');
    }else{
      console.log('tá vivo');
    }
  }




}
