import { TestBed } from '@angular/core/testing';

import { Level7Service } from './level-7.service';

describe('Level7Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Level7Service = TestBed.get(Level7Service);
    expect(service).toBeTruthy();
  });
});
