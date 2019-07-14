import { TestBed } from '@angular/core/testing';

import { Level9Service } from './level-9.service';

describe('Level9Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Level9Service = TestBed.get(Level9Service);
    expect(service).toBeTruthy();
  });
});
