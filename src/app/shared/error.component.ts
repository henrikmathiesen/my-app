import { Component } from '@angular/core';
import { ErrorService } from './error.service';

@Component({
    selector: 'error',
    template: `
        <div class="alert callout" *ngIf="errorService.getAppHasError()">
            <div class="grid-x grid-margin-x align-middle">
                <div class="cell medium-8">
                    <h5>Error</h5>
                    <p>Call support at 555 444 333</p>
                </div>
                <div class="cell medium-4 text-right">
                    <button class="alert button large" (click)="discardError()">Close</button>
                </div>
            </div>
        </div>
    `,
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
