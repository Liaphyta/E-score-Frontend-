import { TestBed } from '@angular/core/testing';

import { CsgoService } from './csgo.service';

describe('CsgoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CsgoService = TestBed.get(CsgoService);
    expect(service).toBeTruthy();
  });
});
