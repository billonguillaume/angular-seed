import { NgModule } from '@angular/core';

import { LazyLoadedComponent } from './lazy-loaded.component';
import { SharedModule } from '@shared/shared.module';
import { SampleFeatureRoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    LazyLoadedComponent
  ],
  imports: [
    SharedModule,
    SampleFeatureRoutingModule
  ]
})
export class SampleFeatureModule { }
