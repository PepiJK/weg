import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {WineListComponent} from './wine-list/wine-list.component';
import {FooterComponent} from './footer/footer.component';
import {ServicesModule} from "./services/services.module";
import {WineDetailComponent} from './wine-detail/wine-detail.component';
import {WineNewComponent} from './wine-new/wine-new.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MatMomentDateModule
} from "@angular/material-moment-adapter";
import {OAuthModule} from "angular-oauth2-oidc";
import { LoginComponent } from './login/login.component';
import {AuthInterceptor} from "../auth.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WineListComponent,
    FooterComponent,
    WineDetailComponent,
    WineNewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServicesModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    OAuthModule.forRoot()
  ],
  providers: [
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
