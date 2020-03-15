import {NgModule, Optional, SkipSelf, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WineRepository} from "./wine-repository.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class ServicesModule {

  constructor(@Optional() @SkipSelf() parentModule?: ServicesModule) {
    if (parentModule) {
      throw new Error(
        'ServicesModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        {provide: WineRepository}
      ]
    };
  }
}
