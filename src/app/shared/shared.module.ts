import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { APP_CONFIG, AppConfig } from '@shared/app.config';

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
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    NgbModule.forRoot()
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    NgbModule
  ],
  providers: [
    { provide : APP_CONFIG, useValue: AppConfig }
  ]
})
export class SharedModule { }
