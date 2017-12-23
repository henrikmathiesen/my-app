import { Injectable } from '@angular/core';

@Injectable()
export class PersonFormConstantsService {

    getFormControlNames() {
        return {
            firstName: 'firstName',
            lastName: 'lastName',
            nickName: 'nickName'
        };
    }

}
