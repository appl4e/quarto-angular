import { TestBed, inject } from '@angular/core/testing';

import { ExploreCategoryService } from './explore-category.service';

describe('ExploreCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExploreCategoryService]
    });
  });

  it('should be created', inject([ExploreCategoryService], (service: ExploreCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
