import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from '@core/components/home/home.component';
import { NgModule } from '@angular/core';

export const routes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'lazyloading',
        loadChildren: 'src/app/sample-feature/sample-feature.module#SampleFeatureModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
