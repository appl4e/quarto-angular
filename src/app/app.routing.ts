import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FrameworkComponent } from './framework/framework.component';
import { DashboardLayoutComponent } from './layout';
import { LoginComponent } from './authentication';
import { HomepageComponent } from '@app/website';
import { SignupComponent } from '@app/authentication/signup/signup.component';



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
    path: 'framework',
    component: FrameworkComponent,
    data: { title: "Framework" }
  },
  {
    path: 'dashboard',
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
