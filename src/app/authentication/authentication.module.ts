import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPassComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthenticationModule { }
