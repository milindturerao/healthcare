import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-educationdetails',
  templateUrl: './educationdetails.component.html',
  styleUrls: ['./educationdetails.component.css']
})
export class EducationdetailsComponent implements OnInit {

  userData:any;
  childname:any;
    constructor() { }
    userLoginForm =new FormGroup({
      caseid:new FormControl('',[Validators.required, Validators.minLength(1)]),
      empName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')]),
      hq: new FormControl('',[Validators.required]),
      cmpYear: new FormControl('',[Validators.required]),
      grade:new FormControl('',[Validators.required]),
    });
  
    addChildDetail(){
      console.log(this.userLoginForm.value);
      // this.userData = this.userLoginForm.value;
      // localStorage.setItem(this.userData.childName,JSON.stringify(this.userData));
      // this.childname = this.userData.childName;
  
  
  
    }
  
    
    get caseid(){
      return this.userLoginForm.get('caseid');
    }
    get empName(){
      return this.userLoginForm.get('empName');
    }
  
    get hq(){
      return this.userLoginForm.get('hq');
    }
  
    get cmpYear(){
      return this.userLoginForm.get('cmpYear');
    }
  
    get grade(){
      return this.userLoginForm.get('grade');
    }
    ngOnInit(): void {
      // this.userData = this.childName
      // this.userData = localStorage.getItem("pooja");
      // console.log('User Data1', this.userData);
    }

}
