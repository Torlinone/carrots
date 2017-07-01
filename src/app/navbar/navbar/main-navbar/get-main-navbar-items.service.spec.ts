import { TestBed, inject } from '@angular/core/testing';

import { GetMainNavbarItemsService } from './get-main-navbar-items.service';

describe('GetMainNavbarItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetMainNavbarItemsService]
    });
  });

  it('should ...', inject([GetMainNavbarItemsService], (service: GetMainNavbarItemsService) => {
    expect(service).toBeTruthy();
  }));
});
