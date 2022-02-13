import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }
  userLoginForm =new FormGroup({
    fName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    lName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    email:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required, Validators.minLength(3)]),
    dob:new FormControl('',[Validators.required]),
    gender:new FormControl('',[Validators.required]),
    contact: new FormControl('',[Validators.required, Validators.pattern('[0-9]+$')]),
    role: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')]),
  });

  userlogin(){
    console.log(this.userLoginForm.value);
  }


  get fName(){
    return this.userLoginForm.get('fName');
  }

  get lName(){
    return this.userLoginForm.get('lName');
  }

  get email(){
    return this.userLoginForm.get('email');
  }

  get password(){
    return this.userLoginForm.get('password');
  }
  get dob(){
    return this.userLoginForm.get('dob');
  }
  get gender(){
    return this.userLoginForm.get('gender');
  }
  get contact(){
    return this.userLoginForm.get('contact');
  }

  get role(){
    return this.userLoginForm.get('role');
  }
  ngOnInit(): void {
  }

}
