import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  userLoginForm =new FormGroup({
    // user: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    lName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    email:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required, Validators.minLength(3)])
  });

  userlogin(){
    console.log(this.userLoginForm.value);
    // this.userData = this.userLoginForm.value;
    // localStorage.setItem("user",JSON.stringify(this.userData));
    // this.userData = localStorage.getItem("user");
    // console.log('User Data1', this.userData);



  }

  // get user(){
  //   return this.userLoginForm.get('user');
  // }

  get email(){
    return this.userLoginForm.get('email');
  }

  get password(){
    return this.userLoginForm.get('password');
  }
  ngOnInit(): void {
  }

}
