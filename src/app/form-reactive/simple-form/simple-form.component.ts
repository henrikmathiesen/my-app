import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';    // These are different than for Template Driven Forms

@Component({
    selector: 'my-simple-form',
    templateUrl: './simple-form.component.html'
})
export class SimpleFormComponent {
    simpleForm: FormGroup;
    nameControl: FormControl;

    constructor() {
        this.nameControl = new FormControl();

        this.simpleForm = new FormGroup({
            'nameControl': this.nameControl
        });
    }

    disableForm() {
        this.simpleForm.disable();
        //this.simpleForm.enable();
    }

    checkFormValid() {
        console.log('this.simpleForm.valid', this.simpleForm.valid);
    }

    onSubmit() {
        console.log('submit');
        console.log('this.nameControl.value', this.nameControl.value);
        console.log('this.simpleForm', this.simpleForm);
        console.log('/submit');

        // TODO: Get a FormControl in a sub FormGroup (we dont have sub FormGroups yet)
        //this.simpleForm.get(['subFormGroup', 'controlInSubFormGroup']);
    }
}
