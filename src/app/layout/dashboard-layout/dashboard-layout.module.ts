import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashboardLayoutRoutes } from './dashboard-layout.routing';
import { HomeComponent } from '../home/home.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardLayoutRoutes),
    FormsModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class DashboardLayoutModule { }
