import { Injectable } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PersonFormAddressConstantsService } from './person-form-address-constants.service';

@Injectable()
export class PersonFormAddressSetupFormService {

    constructor(
        private formBuilder: FormBuilder,
        private personFormAddressConstantsService: PersonFormAddressConstantsService
    ) { }

    setup() {
        return this.formBuilder.group({
            [this.personFormAddressConstantsService.getFormControlNames().street]: this.getSupportData(),
            [this.personFormAddressConstantsService.getFormControlNames().postalCode]: this.getPostalSupportData(),
            [this.personFormAddressConstantsService.getFormControlNames().city]: this.getSupportData(),
        });
    }

    addFormGroupToParent(thisFormGroup: FormGroup, parentFormGroup: FormGroup) {
        parentFormGroup.addControl(this.personFormAddressConstantsService.getFormControlNames().address, thisFormGroup);
    }

    private getSupportData() {
        return [null, Validators.required];
    }

    private getPostalSupportData() {
        return [null, Validators.compose([
            Validators.required,
            Validators.maxLength(5)
        ])];

        // Validators.compose is not necessary anymore
        // https://stackoverflow.com/questions/42394999/why-should-i-use-validators-compose
    }
}
