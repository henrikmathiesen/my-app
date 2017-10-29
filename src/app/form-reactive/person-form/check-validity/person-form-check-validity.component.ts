import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'my-person-form-check-validity',
    templateUrl: './person-form-check-validity.component.html'
})
export class PersonFormCheckValidityComponent {
    @Input() personForm: FormGroup;

    formControlIsValid(formControlName: string) {
        console.log(`${formControlName} valid`, this.personForm.get(formControlName).valid);
    }

    formIsValid() {
        console.log('personForm.valid', this.personForm.valid);
    }
}
