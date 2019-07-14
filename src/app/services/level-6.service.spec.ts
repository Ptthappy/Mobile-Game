import { TestBed } from '@angular/core/testing';

import { Level6Service } from './level-6.service';

describe('Level6Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Level6Service = TestBed.get(Level6Service);
    expect(service).toBeTruthy();
  });
});
