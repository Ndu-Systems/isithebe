/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CallBackService } from './call-back.service';

describe('Service: CallBack', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CallBackService]
    });
  });

  it('should ...', inject([CallBackService], (service: CallBackService) => {
    expect(service).toBeTruthy();
  }));
});
