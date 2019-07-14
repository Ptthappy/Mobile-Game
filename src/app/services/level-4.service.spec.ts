import { TestBed } from '@angular/core/testing';

import { Level4Service } from './level-4.service';

describe('Level4Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Level4Service = TestBed.get(Level4Service);
    expect(service).toBeTruthy();
  });
});
