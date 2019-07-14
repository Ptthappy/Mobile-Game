import { TestBed } from '@angular/core/testing';

import { Level8Service } from './level-8.service';

describe('Level8Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Level8Service = TestBed.get(Level8Service);
    expect(service).toBeTruthy();
  });
});
