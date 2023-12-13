import { TestBed } from '@angular/core/testing';

import { CalculateHelperService } from './calculate-helper.service';

describe('CalculateHelperService', () => {
  let service: CalculateHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculateHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
