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
import { BindingsSub } from './bindings/bindings-sub/bindings-sub.component';
import { ErrorComponent } from './error/error.component';
import { CustomEventsComponent } from './custom-events/custom-events.component';
import { CustomEventsSibblingComponent } from './custom-events-sibbling/custom-events-sibbling.component';

import { HeroService } from './shared/hero.service';
import { ErrorService } from './shared/error.service';
import { CustomEventsMediatorService } from './shared/custom-events-mediator.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    Bindings,
    BindingsSub,
    ErrorComponent,
    CustomEventsComponent,
    CustomEventsSibblingComponent
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
    CustomEventsMediatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
