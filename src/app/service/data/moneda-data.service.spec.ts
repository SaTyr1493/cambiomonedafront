import { TestBed } from '@angular/core/testing';

import { MonedaDataService } from './moneda-data.service';

describe('MonedaDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonedaDataService = TestBed.get(MonedaDataService);
    expect(service).toBeTruthy();
  });
});
