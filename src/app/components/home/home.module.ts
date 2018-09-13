import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';


import { NgSelectModule } from '@ng-select/ng-select';
import { OwlModule } from 'node_modules/ngx-owl-carousel';
import { ExploreCategoryComponent } from './explore-category/explore-category.component';
import { VideosComponent } from './videos/videos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    OwlModule
  ],
  declarations: [
    HomeComponent,
    ExploreCategoryComponent,
    VideosComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
