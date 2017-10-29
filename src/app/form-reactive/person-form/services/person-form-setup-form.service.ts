import { Injectable } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Injectable()
export class PersonFormSetupFormService {

    constructor(
        private formBuilder: FormBuilder
    ) {

    }

    setup() {
        return this.formBuilder.group({
            'firstName': this.getFirstNameSupportData(),
            'lastName': this.getLastNameSupportData(),
            'nickName': this.getNickNameSupportData()
        })
    }

    private getFirstNameSupportData() {
        return [null, Validators.required];
    }

    private getLastNameSupportData() {
        return [null, Validators.required];
    }

    private getNickNameSupportData() {
        return [null, null]
    }

}
