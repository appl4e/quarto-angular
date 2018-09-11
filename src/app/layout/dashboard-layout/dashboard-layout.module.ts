import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashboardLayoutRoutes } from './dashboard-layout.routing';


import { NgSelectModule } from '@ng-select/ng-select';
import { OwlModule } from '../../../../node_modules/ngx-owl-carousel';
import { ComponentsModule } from '../../components/components.module';





@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardLayoutRoutes),
    FormsModule,
    NgSelectModule,
    OwlModule,
    ComponentsModule
  ],
  declarations: [
    
  ]
})
export class DashboardLayoutModule { }
