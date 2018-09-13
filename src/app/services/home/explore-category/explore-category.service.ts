import { Injectable } from '@angular/core';
import { ExpCatList } from '@app/services/home/explore-category/list';

@Injectable({
  providedIn: 'root'
})
export class ExploreCategoryService {

  constructor() { }

  getExpCategories(){
    return ExpCatList;
  }
}
