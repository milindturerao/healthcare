import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectplan',
  templateUrl: './selectplan.component.html',
  styleUrls: ['./selectplan.component.css']
})
export class SelectplanComponent implements OnInit {

  constructor(private router:Router) { }

  userLoginForm =new FormGroup({
    caseid: new FormControl('',[Validators.required,]),
    fName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    lName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    role:new FormControl('',[Validators.required,])
  });
userRole:any;
  userlogin(){
    this.userRole = this.userLoginForm.value;
    console.log(this.userRole.role);
    if (this.userRole.role =="SNAP") {
      this.router.navigate(['incd']);
    } 
    else if (this.userRole.role =="CCAP") {
      this.router.navigate(['childDetail']);
    } 
    else if (this.userRole.role =="RIW") {
      this.router.navigate(['educationDetail']);
    } 
    else {
      alert('Your Plan Not Select')
    }


  }

  
  get caseid(){
    return this.userLoginForm.get('caseid');
  }
  get fName(){
    return this.userLoginForm.get('fName');
  }

  get lName(){
    return this.userLoginForm.get('lastName');
  }

  get role(){
    return this.userLoginForm.get('role');
  }
  ngOnInit(): void {
  }

}
