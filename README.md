# Angular Seed project

## Introduction

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7. Be advised that Angular-CLI 6 only supports Angular versions >= 5.

Command used : `ng new angular-seed --style=scss --skip-tests`.

Files using the application name (for easier renaming) :

* angular.json
* app.e2e-spec.ts
* package.json
* package-lock.json

A simple scrip to easily rename is coming...

Check .gitkeep files content for more details about what the folder is supposed to contain.

## Included libraries

This seed currently doesn't have any npm packages but I'm planning on adding the ones I use the most or find the most useful.

Here's a non-exhaustive list :

* [ng-bootstrap](https://github.com/ng-bootstrap/ng-bootstrap) (but need comparison with [ngx-bootstrap](https://github.com/valor-software/ngx-bootstrap))
* [ngx-moment](https://github.com/urish/ngx-moment)
* [ngx-toastr](https://github.com/scttcper/ngx-toastr)
* i18n: need some tests since runtime i18n is now available in Angular 6 (behind Ivy renderer flag)

## For new projects

* replace uses of "angular-seed" with the name of your app (cf. list in Introduction)
* eventually change the component prefix with the one of your choosing (angular.json)
* change the license used (LICENSE file and package.json)
* change the author (package.json)
