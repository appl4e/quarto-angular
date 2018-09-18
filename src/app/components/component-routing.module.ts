import { Routes } from '@angular/router';
import { HomeComponent } from '@app/components/home/home.component';
import { CreateDocument } from '@app/components/document/create-document/create-document.component';
import { EditDocument } from '@app/components/document/edit-document/edit-document.component';
import { ViewDocument } from '@app/components/document/view-document/view-document.component';



export const ComponentRoutes: Routes = [
  {path: '', component: HomeComponent, data: {title: 'Home'}},
  { path: 'create-document', component: CreateDocument, data: {title: 'Create Document'}},
  { path: 'edit-document', component: EditDocument, data: {title: 'Edit Document'}},
  { path: 'view-document', component: ViewDocument, data: {title: 'Edit Document'}},
]
