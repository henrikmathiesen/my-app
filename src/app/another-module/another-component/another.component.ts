import { Component } from '@angular/core';
import { ErrorService } from 'app/shared/error.service';

@Component({
    selector: 'my-another-component',
    templateUrl: './another.component.html'
})
export class AnotherComponent {

    constructor(
        // We can get to errorService here because it is registered at the root injector
        errorService: ErrorService
    ){
        console.log(typeof errorService.subscribeShowError);
    }

}
