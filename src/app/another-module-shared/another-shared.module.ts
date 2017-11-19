import { NgModule } from '@angular/core';
import { AnotherSharedService } from './services/another-shared.service';

@NgModule({
    providers: [
        AnotherSharedService
    ]
})
export class AnotherSharedModule { }
