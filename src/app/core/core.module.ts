import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { throwIfAlreadyLoaded } from '../shared/utils/utils';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [],
  exports: [
  ]
})
/**
 * The CoreModule should contain singleton services and application critical features (e.g.: Guards, Authentication Services, ...)
 * See Angular style guide : https://angular.io/guide/styleguide#style-04-11
 * CoreModule should be loaded only once. To prevent a second load we're adding a constructor
 * with the CoreModule as an optional injected dependency
 */
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
