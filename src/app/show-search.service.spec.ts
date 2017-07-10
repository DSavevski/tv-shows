import { TestBed, inject } from '@angular/core/testing';

import { ShowSearchService } from './show-search.service';

describe('ShowSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowSearchService]
    });
  });

  it('should be created', inject([ShowSearchService], (service: ShowSearchService) => {
    expect(service).toBeTruthy();
  }));
});
