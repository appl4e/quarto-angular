import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashboardLayoutRoutes } from './dashboard-layout.routing';
import { HomeComponent } from '../home/home.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { OwlModule } from '../../../../node_modules/ngx-owl-carousel';




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
