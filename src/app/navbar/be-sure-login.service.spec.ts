import { TestBed, inject } from '@angular/core/testing';

import { BeSureLoginService } from './be-sure-login.service';

describe('BeSureLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeSureLoginService]
    });
  });

  it('should ...', inject([BeSureLoginService], (service: BeSureLoginService) => {
    expect(service).toBeTruthy();
  }));
});
