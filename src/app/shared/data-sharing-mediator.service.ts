import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataSharingMediatorService {

    private messageSource = new BehaviorSubject<string>('default message'); // current value
    currentMessage = this.messageSource.asObservable();                     // will be used by the components

    changeMessage(message: string) {
        this.messageSource.next(message);
    }

    // OBS: Remember that it can be a timing issue depending on which component loads first
    // Can complement this with a private variable for current message and a getMessage()
}
