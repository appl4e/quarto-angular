import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashboardLayoutRoutes } from './dashboard-layout.routing';


import { NgSelectModule } from '@ng-select/ng-select';
import { OwlModule } from '../../../../node_modules/ngx-owl-carousel';
import { HomeComponent } from '../../components/home/home.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardLayoutRoutes),
    FormsModule,
    NgSelectModule,
    OwlModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class DashboardLayoutModule { }
