import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';        // 1 module for Template Driven Form and 1 for Reactive Form
import { HttpModule } from '@angular/http';

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

import { FormTemplateDrivenComponent, HeroFormComponent, HeroFormDescriptionComponent, HeroFormValidationDirective } from './form-template-driven';
import { 
  FormReactiveComponent, 
  SimpleFormComponent, 
  LittleMoreFormComponent, 
  PersonFormComponent,
  LittleMoreFormSetupFormService, 
  LittleMoreFormValidateFormControlChangesService, 
  LittleFormSupportDataService,
  PersonFormSetupFormService
} from './form-reactive'; 

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
    ConstantsApiService,
    LittleMoreFormSetupFormService,
    LittleMoreFormValidateFormControlChangesService,
    LittleFormSupportDataService,
    PersonFormSetupFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
