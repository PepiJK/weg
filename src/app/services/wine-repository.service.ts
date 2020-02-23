import {Injectable} from '@angular/core';
import {Wine} from "../models/wine";
import {BehaviorSubject} from "rxjs";

@Injectable()

export class WineRepository {
  private wines: Wine[] = [{
  	id: 1,
    title: 'Grüner Veltliner',
    producer: 'Koch',
    type: 'Weißwein',
    harvest: new Date(2019, 9, 11),
    price: 7.9,
    description: 'Strohgelb mit grünen Reflexen, elegante Würze, reife Frucht, kräftig, gehaltvoll, angenehm mild. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur culpa dicta facere in minus modi molestiae molestias natus nemo nobis optio perspiciatis placeat possimus, quas quidem quis quod quos tempora.'
  }, {
    id: 2,
    title: 'Black Vinitage Riesling',
    producer: 'Gruber',
    type: 'Weißwein',
    harvest: new Date(2019, 9, 1),
    price: 8.9,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur culpa dicta facere in minus modi molestiae molestias natus nemo nobis optio perspiciatis placeat possimus, quas quidem quis quod quos tempora.'
  }, {
    id: 3,
    title: 'Blanc de Noir',
    producer: 'Jordan',
    type: 'Rosé',
    harvest: new Date(2019, 9, 20),
    price: 7.9,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur culpa dicta facere in minus modi molestiae molestias natus nemo nobis optio perspiciatis placeat possimus, quas quidem quis quod quos tempora.'
  }, {
    id: 4,
    title: 'Blauburger',
    producer: 'Schüller',
    type: 'Rotwein',
    harvest: new Date(2018, 9, 1),
    price: 9.9,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur culpa dicta facere in minus modi molestiae molestias natus nemo nobis optio perspiciatis placeat possimus, quas quidem quis quod quos tempora.'
  }, {
    id: 5,
    title: 'Franzis Frizzi Gelber Muskateller',
    producer: 'Jordan',
    type: 'Frizzante',
    harvest: new Date(2017, 9, 30),
    price: 8.9,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur culpa dicta facere in minus modi molestiae molestias natus nemo nobis optio perspiciatis placeat possimus, quas quidem quis quod quos tempora.'
  }];

  private winesSubject = new BehaviorSubject<Wine[]>(this.wines);
  public wines$ = this.winesSubject.asObservable();
  private nextId = 6;

  constructor() {
  }


  public addToBegin(newWine: Wine) {
    const newWines: Wine[] = [{
      id: this.nextId++,
      title: newWine.title,
      producer: newWine.producer,
      type: newWine.type,
      harvest: newWine.harvest,
      price: newWine.price,
      description: newWine.description
    }, ...this.wines];
    this.wines = newWines;
    this.winesSubject.next(newWines);
  }

  public addToEnd(newWine: Wine) {
    newWine.id = this.nextId++;
    this.wines.push(newWine);
    this.winesSubject.next(this.wines);
  }

  public remove(id: number) {
    const wines = this.wines.filter(wine => wine.id !== id);
    this.wines = wines;
    this.winesSubject.next(wines);
  }

  public find(id: number): Wine {
    return this.wines.find(wine => wine.id === id);
  }

}
