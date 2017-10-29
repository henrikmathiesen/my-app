import { Injectable } from '@angular/core';

@Injectable()
export class PersonFormConstantsService {

    getFormControlNames(){
        return {
            firstName: 'firstName',
            lastName: 'lastName',
            nickName: 'nickName',
            _address: 'address',
            address: {
                street: 'street',
                postalCode: 'postalCode',
                city: 'city'
            }
        }
    }

}
