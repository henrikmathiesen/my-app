import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Bindings } from './bindings/bindings.component';
import { BindingsChild } from './bindings/bindings-child/bindings-child.component';
import { ErrorComponent } from './error/error.component';
import { DataSharingComponent } from './data-sharing/data-sharing.component';
import { DataSharingSibblingComponent } from './data-sharing-sibbling/data-sharing-sibbling.component';

import { FormTemplateDriven } from './form-template-driven/form-template-driven.component';
import { HeroForm } from './form-template-driven/hero-form/hero-form.component';

import { Games } from './games/games.component';
import { ListUsers, ListGames, ListReviews } from './games/lists';


import { HeroService } from './shared/hero.service';
import { ErrorService } from './shared/error.service';
import { DataSharingMediatorService } from './shared/data-sharing-mediator.service';
import { ConstantsApiService } from './shared/constants-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    Bindings,
    BindingsChild,
    ErrorComponent,
    DataSharingComponent,
    DataSharingSibblingComponent,
    FormTemplateDriven,
    HeroForm,
    Games,
    ListUsers,
    ListGames,
    ListReviews
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
