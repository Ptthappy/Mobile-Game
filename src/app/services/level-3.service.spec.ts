import { TestBed } from '@angular/core/testing';

import { Level3Service } from './level-3.service';

describe('Level3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Level3Service = TestBed.get(Level3Service);
    expect(service).toBeTruthy();
  });
});
