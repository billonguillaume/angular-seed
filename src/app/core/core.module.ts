import { NgModule, Optional, SkipSelf } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { throwIfAlreadyLoaded } from '../shared/utils/utils';
import { HeaderComponent } from '@core/components/header/header.component';
import { FooterComponent } from '@core/components/footer/footer.component';
import { HomeComponent } from '@core/components/home/home.component';

/**
 * The `CoreModule` should contain singleton services and application critical features (e.g.: Guards, Authentication Services, ...)
 *
 * See Angular style guide : https://angular.io/guide/styleguide#style-04-11
 *
 * `CoreModule` should be loaded only once. To prevent a second load we're adding a constructor
 * with the CoreModule as an optional injected dependency
 */
@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
