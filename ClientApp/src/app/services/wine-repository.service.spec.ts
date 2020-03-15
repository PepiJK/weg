import { TestBed } from '@angular/core/testing';

import { WineRepository } from './wine-repository.service';
import {Wine} from "../models/wine";

describe('WineRepositoryService', () => {
  let service: WineRepository;
  let wine: Wine = {
    id: 6,
    title: 'New Wine',
    producer: 'Koch',
    type: 'Weißwein',
    harvest: new Date(),
    price: 7.9,
    description: 'lorem ipsum'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [WineRepository]});
    service = TestBed.inject(WineRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add new element to the beginning of the observable array', () => {
    service.add(wine);
    service.wines$.subscribe(result => expect(result.length).toBe(6));
    service.wines$.subscribe(result => expect(result[0]).toEqual(wine));
  });

  it('should remove element from the observable array', () => {
    service.remove(1);
    service.wines$.subscribe(result => expect(result.length).toBe(4));
    service.wines$.subscribe(result => expect(result[0].id).toBe(2));
  });
});
