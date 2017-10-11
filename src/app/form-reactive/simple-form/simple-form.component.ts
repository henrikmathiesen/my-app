import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';    // These are different than for Template Driven Forms

@Component({
    selector: 'simple-form',
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
        console.log('disable form');
    }

    checkFormValid(){
        console.log('check if form is valid');
    }

    onSubmit() {
        console.log('submit');
        console.log('this.nameControl.value', this.nameControl.value);
        console.log('this.simpleForm', this.simpleForm);
        console.log('/submit');
    }
}
