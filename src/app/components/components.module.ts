import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components of this module
import { HomeModule } from './home/home.module';
import { DocumentModule } from '@app/components/document/document.module';
import { ComponentsComponent } from './components.component';
import { ComponentRoutes } from '@app/components/component-routing.module';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentRoutes),
    HomeModule,
    DocumentModule,
    
  ],
  declarations: [ComponentsComponent],
  exports: [
  ]
})
export class ComponentsModule { }
