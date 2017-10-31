import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PersonFormCheckValiditySelectableControlModel } from './models/person-form-check-validity-selectable-control-model';
import { PersonFormConstantsService } from '../services/person-form-constants.service';
import { PersonFormAddressConstantsService } from '../person-form-address/services/person-form-address-constants.service';
import { PersonFormCheckValiditySetupService } from './services/person-form-check-validity-setup.service';
import { PersonFormCheckValidityCheckService } from './services/person-form-check-validity-check.service';

@Component({
    selector: 'my-person-form-check-validity',
    templateUrl: './person-form-check-validity.component.html',
    providers: [
        PersonFormConstantsService,
        PersonFormAddressConstantsService,
        PersonFormCheckValiditySetupService,
        PersonFormCheckValidityCheckService
    ]
})
export class PersonFormCheckValidityComponent {
    @Input() personFormGroup: FormGroup;
    selectableControls: Array<PersonFormCheckValiditySelectableControlModel>;
    selectedControl: PersonFormCheckValiditySelectableControlModel;
    selectedControlIndex: number;

    constructor(
        private personFormCheckValiditySetupService: PersonFormCheckValiditySetupService,
        private personFormCheckValidityCheckService: PersonFormCheckValidityCheckService
    ) {
        this.selectableControls = this.personFormCheckValiditySetupService.setupSelectableControls();
        this.selectedControlIndex = -1;
    }

    onSelectControl() {
        if (this.selectedControlIndex < 0) {
            this.selectedControl = null;
            return;
        }

        this.selectedControl = this.selectableControls[this.selectedControlIndex];
    }

    formControlIsValid() {
        const formControlIsValid = this.personFormCheckValidityCheckService.formControlIsValid(this.selectedControl, this.personFormGroup);
        console.log(`${this.selectedControl.formControlName} valid`, formControlIsValid);
    }

    formIsValid() {
        console.log('personForm.valid', this.personFormGroup.valid);
    }
}
