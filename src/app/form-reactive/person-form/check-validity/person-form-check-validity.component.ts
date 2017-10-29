import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'my-person-form-check-validity',
    templateUrl: './person-form-check-validity.component.html'
})
export class PersonFormCheckValidityComponent {
    @Input() personFormGroup: FormGroup;

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
