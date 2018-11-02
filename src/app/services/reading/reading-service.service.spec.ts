import { TestBed, inject } from '@angular/core/testing';

import { ReadingServiceService } from './reading-service.service';

describe('ReadingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadingServiceService]
    });
  });

  it('should be created', inject([ReadingServiceService], (service: ReadingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
