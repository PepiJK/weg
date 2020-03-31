import {Component, Inject, OnInit} from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {JwksValidationHandler} from "angular-oauth2-oidc-jwks";
import {DOCUMENT} from "@angular/common";
import {createAuthConfig} from "../auth.config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'WeinVerwaltung';

  constructor(private oAuthService: OAuthService, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    const callback = `${this.document.location.protocol}//${document.location.hostname}:${document.location.port}/`;
    this.oAuthService.configure(createAuthConfig(callback));
    this.oAuthService.tokenValidationHandler = new JwksValidationHandler();
    this.oAuthService.setStorage(localStorage);
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
  }
}
