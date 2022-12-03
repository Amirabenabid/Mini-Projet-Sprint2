import { TestBed } from '@angular/core/testing';

import { musiqueGuard } from './musique.guard';

describe('musiqueGuard', () => {
  let guard: musiqueGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(musiqueGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
