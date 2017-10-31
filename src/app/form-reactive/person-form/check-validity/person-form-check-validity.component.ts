import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PersonFormCheckValiditySelectableControlModel } from './models/person-form-check-validity-selectable-control-model';
import { PersonFormConstantsService } from '../services/person-form-constants.service';
import { PersonFormAddressConstantsService } from '../person-form-address/services/person-form-address-constants.service';
import { PersonFormCheckValiditySetupService } from './services/person-form-check-validity-setup.service';

@Component({
    selector: 'my-person-form-check-validity',
    templateUrl: './person-form-check-validity.component.html',
    providers: [
        PersonFormConstantsService,
        PersonFormAddressConstantsService,
        PersonFormCheckValiditySetupService
    ]
})
export class PersonFormCheckValidityComponent {
    @Input() personFormGroup: FormGroup;
    selectableControls: Array<PersonFormCheckValiditySelectableControlModel>;

    constructor(
        private personFormCheckValiditySetupService: PersonFormCheckValiditySetupService
    ){
        this.selectableControls = this.personFormCheckValiditySetupService.setupSelectableControls();
    }

    formControlIsValid(formControlName: string, formGroupName: string = null) {
        let formControlIsValid: boolean;

        if (!formGroupName) {
            formControlIsValid = this.personFormGroup.get(formControlName).valid;
        }
        else {
            formControlIsValid = this.personFormGroup.get([formGroupName, formControlName]).valid;
        }

        console.log(`${formControlName} valid`, formControlIsValid);
    }

    formIsValid() {
        console.log('personForm.valid', this.personFormGroup.valid);
    }
}
