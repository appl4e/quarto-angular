import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule } from '@angular/router';
import { CreateDocument } from './create-document/create-document.component';
import {FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortablejsModule } from 'node_modules/angular-sortablejs';
import { EditDocument } from './edit-document/edit-document.component';
import { ViewDocument } from './view-document/view-document.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbCollapseModule,
    ReactiveFormsModule,
    FroalaEditorModule,
    FroalaViewModule,
    SortablejsModule
  ],
  declarations: [CreateDocument, EditDocument, ViewDocument]
})
export class DocumentModule { }