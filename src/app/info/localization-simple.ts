/*

// Works with ng serve and ng build --prod
// No need for extra arguments to --prod
// No need for entry in angular.json, just this is enough for general swedish culture
// projects.projectName.i18n.sourceLocale (: "sv-SE" or just "sv")

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeSe from '@angular/common/locales/sv';

import { AppComponent } from './app.component';

registerLocaleData(localeSe);

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'sv-SE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

*/
