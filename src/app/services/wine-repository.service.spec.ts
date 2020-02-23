import { TestBed } from '@angular/core/testing';

import { WineRepository } from './wine-repository.service';

describe('WineRepositoryService', () => {
  let service: WineRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WineRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
