import {Component, OnDestroy, OnInit} from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
  public isLoggedIn: boolean;
  private authSubscription: Subscription;

  constructor(private oAuthService: OAuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.oAuthService.events.subscribe(_ => this.updateStatus());
    this.updateStatus();
  }

  ngOnDestroy(): void {
    if(this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  private updateStatus() {
    this.isLoggedIn = this.oAuthService.hasValidAccessToken();
  }

}
