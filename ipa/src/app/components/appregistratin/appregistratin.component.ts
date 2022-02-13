import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appregistratin',
  templateUrl: './appregistratin.component.html',
  styleUrls: ['./appregistratin.component.css']
})
export class AppregistratinComponent implements OnInit {

  constructor() { }
  userLoginForm =new FormGroup({
    fName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    lName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    email:new FormControl('',[Validators.required, Validators.email]),
    dob:new FormControl('',[Validators.required]),
    gender:new FormControl('',[Validators.required]),
    aadhar:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required, Validators.minLength(3)]),
    contact: new FormControl('',[Validators.required, Validators.pattern('[0-9]+$')]),
    role: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')]),
  });

  userlogin(){
    console.log(this.userLoginForm.value);
    // this.userData = this.userLoginForm.value;
    // localStorage.setItem("user",JSON.stringify(this.userData));
    // this.userData = localStorage.getItem("user");
    console.log('User Data1', this.userLoginForm.value);



  }

  // get user(){
  //   return this.userLoginForm.get('user');
  // }

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
  get aadhar(){
    return this.userLoginForm.get('aadhar');
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
