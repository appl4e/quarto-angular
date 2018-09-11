import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components of this module
import { HomeComponent } from './home/home.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { OwlModule } from '../../../node_modules/ngx-owl-carousel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    OwlModule
  ],
  declarations: [HomeComponent],
  exports: [
    HomeComponent
  ]
})
export class ComponentsModule { }
