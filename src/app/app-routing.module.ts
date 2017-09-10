import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { Bindings } from './bindings/bindings.component';
import { CustomEventsComponent } from './custom-events/custom-events.component';

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
        component: Bindings
    },
    {
        path: 'custom-events',
        component: CustomEventsComponent
    }
];

const routerConfig = RouterModule.forRoot(routes, { 
        useHash: false 
    });

@NgModule({
    imports: [routerConfig],
    exports: [RouterModule]
})
export class AppRoutingModule {}
