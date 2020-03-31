import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OAuthService} from "angular-oauth2-oidc";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private oAuthService: OAuthService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.oAuthService.hasValidAccessToken()) {
      const headers = request.headers.set('Authorization', 'Bearer ' + this.oAuthService.getAccessToken());
      const authenticatedRequest = request.clone({headers});
      return next.handle(authenticatedRequest);
    } else {
      return next.handle(request);
    }
  }
}
