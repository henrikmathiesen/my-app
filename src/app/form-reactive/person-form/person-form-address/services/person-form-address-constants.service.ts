import { Injectable } from '@angular/core';

@Injectable()
export class PersonFormAddressConstantsService {

    getFormControlNames() { 
        return {
            address: 'address',     // formGroup name
            street: 'street',
            postalCode: 'postalCode',
            city: 'city'
        }
    }

}
