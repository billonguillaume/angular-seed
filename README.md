# Angular Seed project

## Introduction

This project is using [Angular CLI](https://github.com/angular/angular-cli) version 6.2.5. Be advised that Angular-CLI 6 only supports Angular versions >= 5.

Command used : `ng new angular-seed --style=scss --skip-tests`.

Files using the application name (for easier renaming) :

* angular.json
* app.e2e-spec.ts
* package.json
* package-lock.json

I will try to write a simple script to replace the project name easily...

Check .gitkeep files content for more details about what the folder is supposed to contain.

## Included libraries

* [ng-bootstrap](https://github.com/ng-bootstrap/ng-bootstrap)
* [angular-fontawesome](https://github.com/FortAwesome/angular-fontawesome)

Here's a non-exhaustive list of NPM packages I'd like to add in the seed:

* [ngx-moment](https://github.com/urish/ngx-moment)
* [ngx-toastr](https://github.com/scttcper/ngx-toastr)
* i18n: I need to do some tests since Angular 6 allows runtime i18n (behind the Ivy renderer flag) and it was the main reason I did not use Angular's native translation system for past projects.

## For new projects

* replace uses of "angular-seed" with the name of your app (cf. list in Introduction)
* eventually change the component prefix with the one of your choosing (angular.json)
* change the license used (LICENSE file and package.json)
* change the author (package.json)
