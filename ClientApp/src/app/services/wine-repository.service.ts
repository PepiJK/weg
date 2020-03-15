import {Inject, Injectable} from '@angular/core';
import {Wine} from "../models/wine";
import {Subject} from "rxjs";
import {repeatWhen, tap} from "rxjs/operators";
import {BASE_URL} from 'src/baseUrl';
import {HttpClient} from "@angular/common/http";

@Injectable()

export class WineRepository {
  private refreshSubject = new Subject<any>();

  constructor(private http: HttpClient, @Inject(BASE_URL) private baseUrl: string) {
  }

  public get wines$() {
    return this.http.get<Wine[]>(`${this.baseUrl}api/Wine`)
      .pipe(
        tap(items => {
          items.forEach(item => item.harvest = new Date(item.harvest));
        }),
        repeatWhen(_ => this.refreshSubject.asObservable())
      );
  }

  public add(item: Wine) {
    return this.http.post(`${this.baseUrl}api/Wine`, item)
      .pipe(
        tap(item => this.refreshSubject.next(item))
      );
  }

  public remove(itemId: number) {
    return this.http.delete(`${this.baseUrl}api/Wine/${itemId}`)
      .pipe(
        tap(item => this.refreshSubject.next(item))
      );
  }

  public find(itemId: number) {
    return this.http.get<Wine>(`${this.baseUrl}api/Wine/${itemId}`)
      .pipe(
        tap(item => {
          item.harvest = new Date(item.harvest);
        })
      );
  }


}
