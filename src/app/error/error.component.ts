import { Component } from '@angular/core';
import { ErrorService } from 'app/shared/error.service';

@Component({
    selector: 'error',
    templateUrl: './error.component.html',
    styles: ['button.alert { margin:0 }']
})
export class ErrorComponent {
    errorService: ErrorService

    constructor(
        errorService: ErrorService
    ) { 
        // need to do it like this, since we use service in template (else prod build fails)
        this.errorService = errorService;
    }

    discardError() { 
        this.errorService.setAppHasError(false);
    }
}
