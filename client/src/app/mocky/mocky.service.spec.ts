import { TestBed } from '@angular/core/testing';

import { MockyService } from './mocky.service';

describe('MockyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockyService = TestBed.get(MockyService);
    expect(service).toBeTruthy();
  });
});
