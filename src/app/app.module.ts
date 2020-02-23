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
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WineListComponent,
    FooterComponent,
    WineDetailComponent,
    WineNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
