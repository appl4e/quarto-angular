import { Component, OnInit } from '@angular/core';
import { ExploreCategoryService } from '@app/services/home/explore-category/explore-category.service';

@Component({
  selector: 'explore-category',
  templateUrl: './explore-category.component.html',
  styleUrls: ['./explore-category.component.scss']
})
export class ExploreCategoryComponent implements OnInit {

  ExploreCatSort = 1;
  sorts = [
    { id: 1, name: 'A-Z' },
    { id: 2, name: 'Z-A' },
    { id: 3, name: 'Most Viewed' },
    { id: 4, name: 'Date' }
  ];

  public explore_cats = [];

  constructor(private exploreCategoryService: ExploreCategoryService) { }

  
  ngOnInit() {
    this.explore_cats = this.exploreCategoryService.getExpCategories();
  }

}
