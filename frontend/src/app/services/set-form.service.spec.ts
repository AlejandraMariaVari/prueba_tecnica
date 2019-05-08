import { TestBed } from '@angular/core/testing';

import { SetFormService } from './set-form.service';

describe('SetFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetFormService = TestBed.get(SetFormService);
    expect(service).toBeTruthy();
  });
});
