import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';                              // 1 module for Template Driven Form and 1 for Reactive Form
import { HttpModule } from '@angular/http';

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

import { HeroService } from './shared/hero.service';
import { ErrorService } from './shared/error.service';
import { DataSharingMediatorService } from './shared/data-sharing-mediator.service';
import { ConstantsApiService } from './shared/constants-api.service';


@NgModule({
  // Modules (we can use functionality from them in this module)
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
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
    HeroFormValidationDirective
  ],
  // Services (Module wide, can also import in a Component, the provider provides an instance)
  providers: [
    HeroService,                                    // If we need the service in many components we put it here, instead of local providers in @Component (for local provider: remember that multiple instances of the component will ge a different service instances)
    ErrorService,
    DataSharingMediatorService,
    ConstantsApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Beware of multiple providers, if importing a module with providers in several modules: https://angular.io/guide/ngmodule#the-core-module
