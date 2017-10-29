import { Injectable } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { PersonFormConstantsService } from '../services/person-form-constants.service';

@Injectable()
export class PersonFormSetupFormService {

    constructor(
        private formBuilder: FormBuilder,
        private personFormConstantsService: PersonFormConstantsService
    ) {}

    setup() {
        return this.formBuilder.group({
            [this.personFormConstantsService.getFormControlNames().firstName]: this.getFirstNameSupportData(),
            [this.personFormConstantsService.getFormControlNames().lastName]: this.getLastNameSupportData(),
            [this.personFormConstantsService.getFormControlNames().nickName]: this.getNickNameSupportData()
        })
    }

    private getFirstNameSupportData() {
        return [null, Validators.required];
    }

    private getLastNameSupportData() {
        return [null, Validators.required];
    }

    private getNickNameSupportData() {
        return ['Henry', null]
    }

}
