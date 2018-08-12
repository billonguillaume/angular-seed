import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LazyLoadedComponent } from '../lazy-loaded.component';

export const routes: Route[] = [
    {
        path: '',
        component: LazyLoadedComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class SampleFeatureRoutingModule { }
