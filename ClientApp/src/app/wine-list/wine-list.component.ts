import {Component, OnInit} from '@angular/core';
import {WineRepository} from "../services/wine-repository.service";
import {Observable} from "rxjs";
import {Wine} from "../models/wine";

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.scss']
})
export class WineListComponent implements OnInit {
  wines$ = new Observable<Wine[]>();

  constructor(private wineRepository: WineRepository) {
    this.wines$ = wineRepository.wines$;
  }

  ngOnInit(): void {
  }

}
