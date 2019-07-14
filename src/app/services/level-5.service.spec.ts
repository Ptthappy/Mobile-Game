import { TestBed } from '@angular/core/testing';

import { Level5Service } from './level-5.service';

describe('Level5Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Level5Service = TestBed.get(Level5Service);
    expect(service).toBeTruthy();
  });
});
