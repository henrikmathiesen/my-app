import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {

    private showErrorSubscriber: any;

    publishShowError() {
        this.showErrorSubscriber();
    }

    subscribeShowError(subscriber){
        this.showErrorSubscriber = subscriber;
    }

    rejectPromise(component: string, error: Object, showUser: boolean = false): Promise<any> {
        if (showUser) {
            this.publishShowError();
        }

        return Promise.reject(JSON.stringify({ component, error }));
    }

}
