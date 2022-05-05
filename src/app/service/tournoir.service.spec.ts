import { TestBed } from '@angular/core/testing';

import { TournoirService } from './tournoir.service';

describe('TournoirService', () => {
  let service: TournoirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TournoirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
