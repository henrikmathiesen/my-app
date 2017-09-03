import { Injectable } from '@angular/core';

@Injectable()

export class ErrorService {

    private _appHasError: boolean = false;

    setAppHasError(hasError: boolean) {
        this._appHasError = hasError;
    }

    getAppHasError() {
        return this._appHasError;
    }

    rejectPromise(component: string, error: Object, showUser: boolean = false): Promise<any> {
        this.setAppHasError(showUser);
        return Promise.reject(JSON.stringify({ component, error }));
    }

}
