/*

// https://medium.com/@aleixsuau/error-handling-angular-859d529fa53a

// Also remeber 404 page


// global-error-handler.ts

import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(
        private injector: Injector,
    ) { }

    handleError(error: Error | HttpErrorResponse) {
		// We need to use the injector to get services in this GlobalErrorHandler class, since Angulars injection systen is not ready when this runs
        const router = this.injector.get(Router);
        const ngZone = this.injector.get(NgZone);
		const logService = this.injector.get(LogService);

        const errorMessage = error.message ? error.message : JSON.stringify(error);
		logService.logToDatabase(errorMessage);

        ngZone.run(() => {
            router.navigate(['/error-page']);												// Navigate to error page (OBS ngZone)
        });
    }

}


// app.module

import { ErrorHandler } from '@angular/core';
import { GlobalErrorHandler } from 'app/services';

providers: [

	{																						// Use our own ErrorHandler in place of Angulars default (that just logs to console)
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }

]


// some-service.ts

postSomething() {
    return this.http.post('url')
	.pipe(
        catchError((error) => {
            this.errorMessageService.setMessage('A specific error happened');		        // store in service, ready to communicate it to the user
            return throwError(error);												        // stops subscribe from running, triggers handleError() in GlobalErrorHandler
        })
          );
}
			

// error-message.service	
	
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorMessageService {
    private defaultMessage = 'System is down';												// Default error message for errors we DO NOT CATCH (no pipe(catch()))
    private message = this.defaultMessage;

    setMessage(message: string) {
        this.message = message;
    }

    setDefaultMessage() {
        this.setMessage(this.defaultMessage);
    }

    getMessage() {
        return this.message;
    }
}


// error-page.component

import { ErrorMessageService } from 'app/services';

msg = '';

constructor(private errorMessageService: ErrorMessageService){}

onInit(){
	msg = errorMessageService.getMessage();													// Render this in template
	errorMessageService.setDefaultMessage();												// Reset error message to default
}



*/
