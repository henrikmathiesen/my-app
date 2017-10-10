import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';        // 1 module for Template Driven Form and 1 for Reactive Form
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BindingsComponent } from './bindings/bindings.component';
import { BindingsChildComponent } from './bindings/bindings-child/bindings-child.component';
import { ErrorComponent } from './error/error.component';
import { DataSharingComponent } from './data-sharing/data-sharing.component';
import { DataSharingSibblingComponent } from './data-sharing-sibbling/data-sharing-sibbling.component';

import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { HeroFormComponent } from './form-template-driven/hero-form/hero-form.component';
import { SpecialTextAreaComponent } from './form-template-driven/hero-form/special-text-area/special-text-area.component';

import {FormReactiveComponent } from './form-reactive/form-reactive.component';
import { SimpleFormComponent } from './form-reactive/simple-form/simple-form.component';

import { GamesComponent } from './games/games.component';
import { ListUsersComponent, ListGamesComponent, ListReviewsComponent } from './games/lists';

import { HeroService } from './shared/hero.service';
import { ErrorService } from './shared/error.service';
import { DataSharingMediatorService } from './shared/data-sharing-mediator.service';
import { ConstantsApiService } from './shared/constants-api.service';

import { HeroFormValidationDirective } from './form-template-driven/validation-directive/hero-form-validation.directive';

@NgModule({
  declarations: [
    AppComponent,
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
    SpecialTextAreaComponent,
    FormReactiveComponent,
    SimpleFormComponent,
    GamesComponent,
    ListUsersComponent,
    ListGamesComponent,
    ListReviewsComponent,

    HeroFormValidationDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    HeroService, // if we need the service in many components we put it here, instead of local providers in @Component
    ErrorService,
    DataSharingMediatorService,
    ConstantsApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
