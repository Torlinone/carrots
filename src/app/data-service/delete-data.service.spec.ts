import { TestBed, inject } from '@angular/core/testing';

import { DeleteDataService } from './delete-data.service';

describe('DeleteDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteDataService]
    });
  });

  it('should ...', inject([DeleteDataService], (service: DeleteDataService) => {
    expect(service).toBeTruthy();
  }));
});
