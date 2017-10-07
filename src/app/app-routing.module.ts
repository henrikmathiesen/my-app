import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { BindingsComponent } from './bindings/bindings.component';
import { DataSharingComponent } from './data-sharing/data-sharing.component';
import { DataSharingSibblingComponent } from './data-sharing-sibbling/data-sharing-sibbling.component';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { GamesComponent } from './games/games.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'bindings',
        component: BindingsComponent
    },
    {
        path: 'data-sharing',
        component: DataSharingComponent
    },
    {
        path: 'data-sharing-sibbling',
        component: DataSharingSibblingComponent
    },
    {
        path: 'form-template-driven',
        component: FormTemplateDrivenComponent
    },
    {
        path: 'form-reactive',
        component: FormReactiveComponent
    },
    {
        path: 'games',
        component: GamesComponent
    }
];

const routerConfig = RouterModule.forRoot(routes, {
    useHash: false
});

@NgModule({
    imports: [routerConfig],
    exports: [RouterModule]
})
export class AppRoutingModule { }
