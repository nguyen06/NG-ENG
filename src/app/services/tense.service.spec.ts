import { TestBed, inject } from '@angular/core/testing';

import { TenseService } from './tense.service';

describe('TenseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TenseService]
    });
  });

  it('should be created', inject([TenseService], (service: TenseService) => {
    expect(service).toBeTruthy();
  }));
});
