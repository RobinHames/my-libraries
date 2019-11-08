import { TestBed } from '@angular/core/testing';

import { NgSearchInputService } from './ng-search-input.service';

describe('NgSearchInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgSearchInputService = TestBed.get(NgSearchInputService);
    expect(service).toBeTruthy();
  });
});
