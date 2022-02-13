import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppregistratinComponent } from './components/appregistratin/appregistratin.component';
import { ChilddetailsComponent } from './components/childdetails/childdetails.component';
import { CreatecaseComponent } from './components/createcase/createcase.component';
import { CreateplanComponent } from './components/createplan/createplan.component';
import { EducationdetailsComponent } from './components/educationdetails/educationdetails.component';
import { IncomedetailsComponent } from './components/incomedetails/incomedetails.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SelectplanComponent } from './components/selectplan/selectplan.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent, pathMatch:'full'},
  {path: 'registration', component:RegistrationComponent, pathMatch:'full'},
  {path: 'registrationapp', component:AppregistratinComponent, pathMatch:'full'},
  {path: 'selectPlan', component:SelectplanComponent, pathMatch:'full'},
  {path: 'incd', component:IncomedetailsComponent, pathMatch:'full'},
  {path: 'childDetail', component:ChilddetailsComponent, pathMatch:'full'},
  {path: 'educationDetail', component:EducationdetailsComponent, pathMatch:'full'},
  {path: 'createcase', component:CreatecaseComponent, pathMatch:'full'},
  {path: 'createPlan', component:CreateplanComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
