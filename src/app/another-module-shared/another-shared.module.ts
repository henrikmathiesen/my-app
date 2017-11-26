import { NgModule } from '@angular/core';
import { AnotherSharedService } from './services/another-shared.service';

@NgModule({
    // These instances are available to modules importing this module
    providers: [
        AnotherSharedService
    ]
})
export class AnotherSharedModule { }
