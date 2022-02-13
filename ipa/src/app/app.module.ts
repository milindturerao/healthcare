import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppregistratinComponent } from './components/appregistratin/appregistratin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectplanComponent } from './components/selectplan/selectplan.component';
import { IncomedetailsComponent } from './components/incomedetails/incomedetails.component';
import { ChilddetailsComponent } from './components/childdetails/childdetails.component';
import { EducationdetailsComponent } from './components/educationdetails/educationdetails.component';
import { CreatecaseComponent } from './components/createcase/createcase.component';
import { CreateplanComponent } from './components/createplan/createplan.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    AppregistratinComponent,
    SelectplanComponent,
    IncomedetailsComponent,
    ChilddetailsComponent,
    EducationdetailsComponent,
    CreatecaseComponent,
    CreateplanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
