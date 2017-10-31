import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PersonFormCheckValiditySelectableControlModel } from '../models/person-form-check-validity-selectable-control-model';

@Injectable()
export class PersonFormCheckValidityCheckService {

    formControlIsValid(selectedControl: PersonFormCheckValiditySelectableControlModel, personFormGroup: FormGroup): boolean {
        const formControlName = selectedControl.formControlName;
        const formGroupName = selectedControl.formGroupName;

        let formControlIsValid: boolean;

        if (formGroupName == null) {
            formControlIsValid = personFormGroup.get(formControlName).valid;
        }
        else {
            formControlIsValid = personFormGroup.get([formGroupName, formControlName]).valid;
        }

        return formControlIsValid;
    }

}
