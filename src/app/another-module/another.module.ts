import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';                // In feature modules we import this instead of BrowserModule: https://angular.io/guide/ngmodule-faq#q-browser-vs-common-module
import { AnotherRoutingModule } from './another-routing.module';
import { AnotherComponent } from './another-component/another.component';

@NgModule({
    imports: [
        CommonModule,
        AnotherRoutingModule
    ],
    // These are local to this module (for example HighlightDirective, AwesomePipe)
    declarations: [
        AnotherComponent
    ],
    // These are available to modules importing this module
    exports: [
        // AnotherComponent , we dont need to export it since we only navigate to it (we dont use its selector directly in other modules)
    ],
})
export class AnotherModule { }
