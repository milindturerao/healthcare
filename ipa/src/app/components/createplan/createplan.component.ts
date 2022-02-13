import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createplan',
  templateUrl: './createplan.component.html',
  styleUrls: ['./createplan.component.css']
})
export class CreateplanComponent implements OnInit {

  constructor() { }
  userLoginForm =new FormGroup({
    planName: new FormControl('',[Validators.required]),
    planDesc: new FormControl('',[Validators.required]),
    planStartDate: new FormControl('',[Validators.required]),
    planEndDate:new FormControl('',[Validators.required])
  });

  userlogin(){
    console.log(this.userLoginForm.value);
  }

  
  get planEndDate(){
    return this.userLoginForm.get('planEndDate');
  }
  get planDesc(){
    return this.userLoginForm.get('planDesc');
  }
  get planName(){
    return this.userLoginForm.get('planName');
  }

  get planStartDate(){
    return this.userLoginForm.get('planStartDate');
  }

  ngOnInit(): void {
  }

}
