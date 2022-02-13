import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-childdetails',
  templateUrl: './childdetails.component.html',
  styleUrls: ['./childdetails.component.css']
})
export class ChilddetailsComponent implements OnInit {
userData:any;
childname:any;
  constructor() { }
  userLoginForm =new FormGroup({
    caseid:new FormControl('',[Validators.required, Validators.minLength(1)]),
    empName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    childName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    childGender: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    aadharNo:new FormControl('',[Validators.required]),
  });

  addChildDetail(){
    console.log(this.userLoginForm.value);
    this.userData = this.userLoginForm.value;
    localStorage.setItem(this.userData.childName,JSON.stringify(this.userData));
    // this.childname = this.userData.childName;



  }

  
  get caseid(){
    return this.userLoginForm.get('caseid');
  }
  get empName(){
    return this.userLoginForm.get('empName');
  }

  get childName(){
    return this.userLoginForm.get('childName');
  }

  get childGender(){
    return this.userLoginForm.get('childGender');
  }

  get aadharNo(){
    return this.userLoginForm.get('aadharNo');
  }
  ngOnInit(): void {
    // this.userData = this.childName
    this.userData = localStorage.getItem("pooja");
    console.log('User Data1', this.userData);
  }

}
