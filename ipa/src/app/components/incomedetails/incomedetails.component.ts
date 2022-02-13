import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-incomedetails',
  templateUrl: './incomedetails.component.html',
  styleUrls: ['./incomedetails.component.css']
})
export class IncomedetailsComponent implements OnInit {

  constructor() { }
  userLoginForm =new FormGroup({
    empWork: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    empName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    income: new FormControl('',[Validators.required]),
    caseid:new FormControl('',[Validators.required, Validators.minLength(1)])
  });

  userlogin(){
    console.log(this.userLoginForm.value);
  }

  
  get caseid(){
    return this.userLoginForm.get('caseid');
  }
  get empName(){
    return this.userLoginForm.get('empName');
  }
  get empWork(){
    return this.userLoginForm.get('empWork');
  }

  get income(){
    return this.userLoginForm.get('income');
  }
  ngOnInit(): void {
  }

}
