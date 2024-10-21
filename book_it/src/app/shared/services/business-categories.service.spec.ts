import { TestBed } from '@angular/core/testing';

import { BusinessCategoriesService } from './business-categories.service';

describe('BusinessCategoriesService', () => {
  let service: BusinessCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
