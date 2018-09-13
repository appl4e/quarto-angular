import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components of this module
import { HomeModule } from './home/home.module';
import { DocumentModule } from '@app/components/document/document.module';


@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    DocumentModule
  ],
  declarations: [],
  exports: [
  ]
})
export class ComponentsModule { }
