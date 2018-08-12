import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken('app.config');
/**
 * Interface containing application wide configurations/variables that do not depend on the environment.
 * The values are injected in the module and can be retrived thanks to the `APP_CONFIG` token.
 *
 * ### Example
 *
 * ```
 * constructor(@Inject(APP_CONFIG)config: IAppConfig) {
 *  this.config = config;
 * } ```
 *
 */
export interface IAppConfig {
    staticField: string;
}

export const AppConfig: IAppConfig = {
    staticField: 'dummyValue'
};
