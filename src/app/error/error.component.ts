import { Component } from '@angular/core';
import { ErrorService } from 'app/shared/error.service';

@Component({
    selector: 'error',
    templateUrl: './error.component.html',
    styles: ['button.alert { margin:0 }']
})
export class ErrorComponent {
    constructor(
        private errorService: ErrorService
    ) { }

    discardError() { 
        this.errorService.setAppHasError(false);
    }
}
