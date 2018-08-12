import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { APP_CONFIG, AppConfig } from '@shared/app.config';
import { RouterModule } from '../../../node_modules/@angular/router';
import { FontAwesomeIconsModule } from '@shared/modules/font-awesome-icons.module';

/**
 * The SharedModule contains "Angular objects" (e.g.: Services, Components) or code used in multiple modules but
 * that are not critical to the appliation (cf. `CoreModule`).
 *
 * See Angular style guide : https://angular.io/guide/styleguide#style-04-10
 *
 * SharedModule should not specify providers. Use forRoot method if needed or else each module importing SharedModule will
 * create its own service and not use a singleton (may be an unwanted behavior depending on the business logic).
 *
 * See this link for more explanations : https://angular.io/guide/ngmodule-faq#the-lazy-loaded-scenario
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FontAwesomeIconsModule,
    RouterModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeIconsModule,
    RouterModule
  ],
  providers: [
    { provide : APP_CONFIG, useValue: AppConfig }
  ]
})
export class SharedModule { }
