import { environment } from '../environments/environment';

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
import { RxJsComponent } from './rxjs/rxjs.component';
import { PagingComponent } from './paging/paging.component';
import { EcaihbceComponent } from './ecaihbce/ecaihbce.component';

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
        path: 'rxjs',
        component: RxJsComponent
    },
    {
        path: 'paging',
        component: PagingComponent
    },
    {
        path: 'ecaihbce',
        component: EcaihbceComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent,

        // canActivate: [OurRouteGuardService]
        // - make a service that implements import { CanActivate } from '@angular/router';
        // - the interface method gets a route: ActivatedRouteSnapshot as first argument
        // - provide the service in a module
        // - https://angular.io/api/router/CanActivate

        // canDeactivate: [OurRouteLeaveGuardService]
        // - make a service that implements import { CanDeactivate } from '@angular/router';
        // - the interface method gets the current route:s component as first argument
        // - provide the service in a module
        // - https://angular.io/api/router/CanDeactivate
    },
];

const routerConfig = RouterModule.forRoot(routes, {
    useHash: environment.useHash
});

@NgModule({
    imports: [routerConfig],
    exports: [RouterModule]
})
export class AppRoutingModule { }

/*

    GET ROUTE INFO AND SET TITLE
    - https://toddmotto.com/dynamic-page-titles-angular-2-router-events


    
    LAZY LOAD MODULE

    - app.module.ts
        - imports BrowserModule
        - imports app-routing.module
        - DOES NOT import the lazy loaded module

    - app-routing.module
        - imports RouterModule.forRoot(routes)
        - exports RouterModule (from '@angular/router';), for convenience
        - routes
            {
                path: 'lazy',
                loadChildren: 'app/lazy/lazy.module#LazyModule'
            }
        
    - lazy.module
        - imports CommonModule
        - imports lazy-routing.module

    - lazy-routing.module
        - imports RouterModule.forChild(routes)
        - exports RouterModule (from '@angular/router';), for convenience (if needed)
        - routes
            {
                path: '',                           // url: /lazy
                component: LazyComponent
            },
            {
                path: 'step1',                      // url: /lazy/step1
                component: Step1Component
            }

        OR
            {
                path: '',
                component: LazyComponent,           // should have a <router-outlet></router-outlet>
                children: [
                    path: 'step1',
                    component: Step1Component       // urls are the same, but this component will be loaded in the router-outlet in LazyComponent
                ]
            }




    REDIRECT TO /sub/subsub

    - app-routing.module
        - routes
            {
                path: '',
                redirectTo: '/sub/subsub',
                pathMatch: PathMatch.full
            },
            {
                path: 'sub',
                loadChildren: 'app/sub/sub.module#SubModule'
            }

    - sub-routing.module
        - routes
            {
                path: '',
                component: SubComponent,            // no need for a <router-outlet></router-outlet> , in fact no need for a component at all
                children: [
                    {
                        path: '',
                        redirectTo: 'subsub',
                        pathMatch: PathMatch.full
                    },
                    {
                        path: 'subsub',
                        component: SubSubComponent
                    }
                ]
            }

*/
