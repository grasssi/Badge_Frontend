import { TestBed } from '@angular/core/testing';

import { EfccmService } from './efccm.service';

describe('EfccmService', () => {
  let service: EfccmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EfccmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
