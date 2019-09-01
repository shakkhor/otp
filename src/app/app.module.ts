import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

import { NavbarComponent } from './navbar/navbar.component';

import { SmsComponent } from './sms/sms.component';
import { from } from 'rxjs';

import { StatusComponent } from './status/status.component';
import {
  MatToolbarModule,
  MatListModule,
  MatMenuModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatChipsModule,
  MatCardModule,
  MatButtonModule,
  MatSelectModule, 
  MatSnackBarModule
} from '@angular/material';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { WelcomeComponent } from './welcome/welcome.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    NavbarComponent,
    ToolBarComponent,
    SmsComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatListModule,
    MatMenuModule,    
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,   
    FormsModule,
    MatSelectModule,
    MatToolbarModule, 
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }