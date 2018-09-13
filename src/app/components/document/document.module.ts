import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateDocument } from './create-document/create-document.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [CreateDocument]
})
export class DocumentModule { }