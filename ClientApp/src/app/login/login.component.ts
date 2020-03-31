import {Component, OnDestroy, OnInit} from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public isLoggedIn: boolean;
  public userName: string;
  public userEmail: string;

  private jwtHelperService: JwtHelperService = new JwtHelperService();
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

    if(this.isLoggedIn) {
      const token = this.oAuthService.getAccessToken();
      const decodedToken = this.jwtHelperService.decodeToken(token);
      this.userName = decodedToken.name;
      this.userEmail = decodedToken.email;
    } else {
      this.userName = null;
      this.userEmail = null;
    }
  }

  public login() {
    this.oAuthService.initImplicitFlow();
  }

  public logout() {
    this.oAuthService.logOut();
  }

}
