import {Component, OnInit} from '@angular/core';
import {WineRepository} from "../services/wine-repository.service";
import {Observable} from "rxjs";
import {Wine} from "../models/wine";
import {OAuthService} from "angular-oauth2-oidc";

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.scss']
})
export class WineListComponent implements OnInit {
  wines$ = new Observable<Wine[]>();
  public canDelete: boolean;

  constructor(private wineRepository: WineRepository, public oAuthService: OAuthService) {
    this.wines$ = wineRepository.wines$;
  }

  ngOnInit(): void {
  }

  canModify(item: Wine) {
    return this.oAuthService.hasValidAccessToken() && this.oAuthService.getIdentityClaims()['sub'] === item.userSubject;
  }

  deleteItem(item: Wine) {
    this.wineRepository.remove(item.id).subscribe();
  }

}
