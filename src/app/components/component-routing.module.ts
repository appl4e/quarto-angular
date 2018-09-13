import { Routes } from '@angular/router';
import { HomeComponent } from '@app/components/home/home.component';
import { CreateDocument } from '@app/components/document/create-document/create-document.component';



export const ComponentRoutes: Routes = [
  {path: '', component: HomeComponent, data: {title: 'Home'}},
  { path: 'create-document', component: CreateDocument, data: {title: 'Create Document'}}
]
