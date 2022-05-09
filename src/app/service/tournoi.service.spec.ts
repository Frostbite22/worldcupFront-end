import { TestBed } from '@angular/core/testing';

import { tournoiService } from './tournoi.service';

describe('tournoiService', () => {
  let service: tournoiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(tournoiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
