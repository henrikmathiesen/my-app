import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'app/shared/error.service';

@Component({
    selector: 'error',
    templateUrl: './error.component.html',
    styles: ['button.alert { margin:0 }']
})
export class ErrorComponent implements OnInit {

    errorIsVisible: boolean;

    constructor(
        private errorService: ErrorService
    ) {
        // need to do it like this (not private), if we use service in template (else prod build fails)
        // this.errorService = errorService;
    }

    ngOnInit() {
        this.errorService.subscribeShowError(this.showError.bind(this));
    }

    showError() {
        this.errorIsVisible = true;
    }

    hideError() {
        this.errorIsVisible = false;
    }
}
