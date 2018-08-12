import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from '@core/components/home/home.component';
import { NgModule } from '@angular/core';

export const routes: Route[] = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
