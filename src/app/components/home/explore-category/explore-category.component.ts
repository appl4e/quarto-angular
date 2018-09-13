import { Component, OnInit } from '@angular/core';
import { ExploreCategoryService } from '@app/services/home/explore-category/explore-category.service';

@Component({
  selector: 'explore-category',
  templateUrl: './explore-category.component.html',
  styleUrls: ['./explore-category.component.scss']
})
export class ExploreCategoryComponent implements OnInit {

  public explore_cats = [];

  constructor(private exploreCategoryService: ExploreCategoryService) { }

  
  ngOnInit() {
    this.explore_cats = this.exploreCategoryService.getExpCategories();
  }

}
