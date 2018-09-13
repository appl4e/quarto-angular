import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreCategoryService } from '@app/services/home/explore-category/explore-category.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
    ExploreCategoryService
  ]
})
export class ServicesModule { }
