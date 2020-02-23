import {Component, OnDestroy, OnInit} from '@angular/core';
import {WineRepository} from "../services/wine-repository.service";
import {Wine} from "../models/wine";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.scss']
})
export class WineDetailComponent implements OnInit, OnDestroy {
  wine?: Wine;
  private routeSubscription?: Subscription;

  constructor(private wineRepository: WineRepository, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.routeSubscription =
      this.activatedRoute.params.subscribe(params => {
        this.wine = this.wineRepository.find(+params['id']);
      });
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

}
