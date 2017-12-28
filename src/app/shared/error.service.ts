import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {

    // This should probably have been done with a BehaviorSubject instead of a vanilla js pub/sub system

    private showErrorSubscriber: any;

    private publishShowError() {
        this.showErrorSubscriber();
    }

    subscribeShowError(subscriber) {
        this.showErrorSubscriber = subscriber;
    }

    rejectPromise(component: string, error: Object, showUser: boolean = false): Promise<any> {
        if (showUser) {
            this.publishShowError();
        }

        return Promise.reject(JSON.stringify({ component, error }));
    }

}
