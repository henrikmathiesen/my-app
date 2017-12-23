import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';                              // 1 module for Template Driven Form and 1 for Reactive Form
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgArrayPipesModule } from 'ngx-pipes';

import { AppRoutingModule } from './app-routing.module';

import { AnotherSharedModule } from './another-module-shared/another-shared.module';            // A1) Another Module
import { AnotherModule } from './another-module/another.module';                                // B1) Import another module with exported component

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BindingsComponent } from './bindings/bindings.component';
import { BindingsChildComponent } from './bindings/bindings-child/bindings-child.component';
import { ErrorComponent } from './error/error.component';
import { DataSharingComponent } from './data-sharing/data-sharing.component';
import { DataSharingSibblingComponent } from './data-sharing-sibbling/data-sharing-sibbling.component';

import { FormTemplateDrivenComponent, HeroFormComponent, HeroFormDescriptionComponent, HeroFormValidationDirective } from './form-template-driven';
import {
  FormReactiveComponent,
  SimpleFormComponent,
  LittleMoreFormComponent,
  PersonFormComponent,
  PersonFormCheckValidityComponent,
  PersonFormAddressComponent
} from './form-reactive';

import { RxJsComponent } from './rxjs/rxjs.component';
import { PagingComponent } from './paging/paging.component';
import { EcaihbceComponent } from './ecaihbce/ecaihbce.component';

import { HeroService } from './shared/hero.service';
import { ErrorService } from './shared/error.service';
import { DataSharingMediatorService } from './shared/data-sharing-mediator.service';
import { PostsService } from './shared/posts.service';
import { ConstantsApiService } from './shared/constants-api.service';


@NgModule({
  // Modules (we can use functionality from them in this module)
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgxPaginationModule,
    NgArrayPipesModule,
    AppRoutingModule,
    AnotherSharedModule,                            // A2) We import it here, then we can inject an instance of another-shared.service (provided in another-shared.module) in components in this module (see app.component)
    AnotherModule                                   // B2) Now we can use the exported component in this module, also routing to a component in that module works
  ],
  // Components, Directives, Pipes (always Module wide)
  declarations: [
    AppComponent,
    NavComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    BindingsComponent,
    BindingsChildComponent,
    ErrorComponent,
    DataSharingComponent,
    DataSharingSibblingComponent,
    FormTemplateDrivenComponent,
    HeroFormComponent,
    HeroFormDescriptionComponent,
    FormReactiveComponent,
    SimpleFormComponent,
    LittleMoreFormComponent,
    PersonFormComponent,
    PersonFormCheckValidityComponent,
    PersonFormAddressComponent,
    RxJsComponent,
    PagingComponent,
    EcaihbceComponent,
    HeroFormValidationDirective
  ],
  // Services (Module wide, can also import in a Component, the provider provides an instance)
  // If we need the service in many components we put it here, instead of local providers in @Component (for local provider: remember that multiple instances of the component will ge a different service instances)
  // UPDATE:
  // - These are actually registered with the root injector, so all modules will get an instance of these. The same is true for providers in other modules.
  // - Beware, if we provide a service in a lazy loaded module, Angular creates a new injector for that module and registers it there, that service instance is only available to that module and it will be a seperate instance
  // - Beware, if we import a module with providers into a lazy loaded module, those services gets registered with the new injector also and same problem as above will hapen, https://angular.io/guide/ngmodule-faq#q-why-bad
  // - If we provide a service in 2 eager loaded modules, Angular will only create one instance
  // BEST PRACTICE
  // - Use an eager loaded core.module with all application wide services in a provider (gets registered with the root injector), import it in app.module (lazy loaded modules can then use these also)
  // - Use local providers in feature modules, for structure puropose (even though services here are technically registered in the root injector)
  // - For shared components, directive and pipes, use a shared.module and put them there, import the shared module in feature modules that need it
  providers: [
    HeroService,
    ErrorService,
    DataSharingMediatorService,
    PostsService,
    ConstantsApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Beware of multiple providers, if importing a module with providers in several modules: https://angular.io/guide/ngmodule#the-core-module
