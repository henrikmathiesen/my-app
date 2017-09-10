import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CustomEventsMediatorService {

    private messageSource = new BehaviorSubject<string>('default message'); // current value
    currentMessage = this.messageSource.asObservable();                     // will be used by the components

    changeMessage(message: string) {
        this.messageSource.next(message);
    }
}
