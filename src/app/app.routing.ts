import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FrameworkComponent } from './framework/framework.component';
import { DashboardLayoutComponent } from './layout';
import { LoginComponent } from './authentication';
import { HomepageComponent } from '@app/website';
import { SignupComponent } from '@app/authentication/signup/signup.component';
import { ForgotPassComponent } from '@app/authentication/forgot-pass/forgot-pass.component';



const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    data: {title: 'Quarto | Home'}
  },
  {
    path: 'Login',
    component: LoginComponent,
    data: {title: "Log In"}
  },
  {
    path: 'Signup',
    component: SignupComponent,
    data: {title: "Sign Up"}
  },
  {
    path: 'ForgotPassword',
    component: ForgotPassComponent,
    data: {title: "Forgot Password"}
  },
  {
    path: 'framework',
    component: FrameworkComponent,
    data: { title: "Framework" }
  },
  {
    path: 'home',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layout/dashboard-layout/dashboard-layout.module#DashboardLayoutModule'
      }
    ]
  } 
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
