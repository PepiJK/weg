import {AuthConfig} from "angular-oauth2-oidc";

export function createAuthConfig(callbackUrl: string): AuthConfig {
  return {
    clientId: 'bif4ss2019ue5',
    issuer: 'https://bif4-web-identity.azurewebsites.net',
    redirectUri: callbackUrl,
    postLogoutRedirectUri: callbackUrl,
    scope: 'openid profile ue5-api'
  };
}
