import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'my-person-form-check-validity',
    templateUrl: './person-form-check-validity.component.html'
})
export class PersonFormCheckValidityComponent {
    @Input() personFormGroup: FormGroup;

    formControlIsValid(formControlName: string, formGroup: FormGroup) {
        console.log(`${formControlName} valid`, this.personFormGroup.get(formControlName).valid);
    }

    formIsValid() {
        console.log('personForm.valid', this.personFormGroup.valid);
    }
}
