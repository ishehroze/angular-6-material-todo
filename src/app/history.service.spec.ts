import { TestBed, inject } from '@angular/core/testing';

import { HistoryService } from './history.service';

describe('HistoryServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistoryService]
    });
  });

  it('should be created', inject([HistoryService], (service: HistoryService) => {
    expect(service).toBeTruthy();
  }));
});
