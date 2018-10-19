/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BenefitService } from './benefit.service';

describe('Service: Benefit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BenefitService]
    });
  });

  it('should ...', inject([BenefitService], (service: BenefitService) => {
    expect(service).toBeTruthy();
  }));
});
