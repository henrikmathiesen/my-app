import { Injectable } from '@angular/core';

@Injectable()

export class ErrorService {

    rejectPromise(component:string, error: Object): Promise<any> {
        return Promise.reject(JSON.stringify({ component, error }));
    }

}
