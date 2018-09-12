import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';


import { NgSelectModule } from '@ng-select/ng-select';
import { OwlModule } from 'node_modules/ngx-owl-carousel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    OwlModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
