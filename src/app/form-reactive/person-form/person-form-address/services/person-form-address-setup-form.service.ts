import { Injectable } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PersonFormConstantsService } from '../../services/person-form-constants.service';

@Injectable()
export class PersonFormAddressSetupFormService {

    constructor(
        private formBuilder: FormBuilder,
        private personFormConstantsService: PersonFormConstantsService
    ) { }

    setup() {
        return this.formBuilder.group({
            [this.personFormConstantsService.getFormControlNames().address.street]: this.getSupportData(),
            [this.personFormConstantsService.getFormControlNames().address.postalCode]: this.getPostalSupportData(),
            [this.personFormConstantsService.getFormControlNames().address.city]: this.getSupportData(),
        });
    }

    addFormGroupToParent(thisFormGroup: FormGroup, parentFormGroup: FormGroup) {
        parentFormGroup.addControl(this.personFormConstantsService.getFormControlNames()._address, thisFormGroup);
    }

    private getSupportData() {
        return [null, Validators.required];
    }

    private getPostalSupportData() {
        return [null, Validators.compose([
            Validators.required, 
            Validators.maxLength(5)
        ])];
    }
}
