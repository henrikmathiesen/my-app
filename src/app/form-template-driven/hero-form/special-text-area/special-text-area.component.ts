import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { OrderHero } from '../../models/order-hero';

@Component({
    selector: 'my-special-text-area',
    templateUrl: './special-text-area.component.html'
})
export class SpecialTextAreaComponent implements OnInit {
    @Input() form: NgForm;
    @Input() model: OrderHero; // Send in an object else bindings wont work. This binds both ways.
    @ViewChild('descriptionFormControl') descriptionFormControl: NgModel;

    // Not so easy to nest form components in template-driven forms: https://gist.github.com/jehugaleahsa/c40fb64d8613cfad8f1e1faa4c2a7e33
    // But we are getting there: https://stackoverflow.com/questions/46241768/angular-add-control-to-form-from-child-component

    ngOnInit() {
        this.form.addControl(this.descriptionFormControl);
    }

    disableForm() {
        this.form.control.disable();
        console.log('this.form.valid', this.form.valid); // not valid after disable
        console.log('this.form.value', this.form.value); // can get the values like this
    }
}
