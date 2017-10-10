import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';    // These are different that for Template Driven Forms

@Component({
    selector: 'simple-form',
    templateUrl: './simple-form.component.html'
})
export class SimpleFormComponent {
    name: FormControl;

    constructor(){
        this.name = new FormControl();
    }

    onSubmit() {
        console.log('submit', this.name);
    }
}
