import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components of this module
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule
  ],
  declarations: [],
  exports: [
  ]
})
export class ComponentsModule { }
