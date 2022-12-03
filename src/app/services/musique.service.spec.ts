import { TestBed } from '@angular/core/testing';

import { musiqueService } from './musique.service';



describe('musiqueService', () => {
  let service: musiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(musiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
