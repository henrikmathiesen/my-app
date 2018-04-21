import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModelGroup, FormControl } from '@angular/forms';
import { OrderHero } from '../models/order-hero';
import { HeroFormConstant } from './models/hero-form.constant';
import { OrderHeroSupportData } from '../models/order-hero-support-data';
import { HeroFormSetupService } from './services/hero-form-setup.service';

@Component({
    selector: 'my-hero-form',
    templateUrl: './hero-form.component.html',
    styleUrls: ['./hero-form.component.scss'],
    providers: [
        HeroFormSetupService
    ]
})
export class HeroFormComponent {
    @ViewChild('heroForm') heroForm: NgForm;
    @ViewChild('userAccountFormGroup') userAccountFormGroup: NgModelGroup;
    @ViewChild('userAccountFormGroupEmailFormControl') userAccountFormGroupEmailFormControl: FormControl;   // Can get to a form control directly (see template also)

    model: OrderHero;
    supportData: OrderHeroSupportData;
    submited: boolean;

    readonly heroFormConstant = HeroFormConstant;

    constructor(
        private heroFormSetupService: HeroFormSetupService
    ) {
        console.log(
            this.heroFormConstant.email
        );
        this.model = this.heroFormSetupService.setupModel();
        this.supportData = this.heroFormSetupService.setupSupportData();
        this.submited = false;
    }

    // ngOnInit() {
    //     // Not needed since the formGroup is not in a sub component
    //     //this.heroForm.addFormGroup(this.userAccountFormGroup);
    // }

    onSubmit() {
        // We make a copy, because clearNullFields() will clear properties on model before console.log() prints
        const postModel = Object.assign({}, this.model);
        const values = Object.assign({}, this.heroForm.value);
        console.log('HeroForm, onSubmit', postModel, values, this.heroForm);

        /*
            IMPORTANT
            - It is not best practice to use two way binding the way we have done in the view [(ngModel)]
            - It is better to use [ngModel]="user.name" as a one way binding, if we want to set fields with values
            - The posted form data, that the user typed in, can be get by using this.heroForm.value
            - Allthough note that the name attributes will be used as properties on the object, so snake case is not recommended (food-preference)
            - If we are not displaying data, then ngModel (by itself like that) together with a name="foo" is enough -- data will be placed on the form
            https://toddmotto.com/angular-2-forms-template-driven#ngmodel-ngmodel-and-ngmodel

            BUT
            - hero-form-validation does dynamic validation on the updated model, so it needs 2 way binding
            - But we could perhaps use this.heroForm.valueChanges.subscribe

            Side note
            - (ngModel)="user.name" means that when user types in the field, user.name is populated
            - But, as stated above, we can get it from the form itself


            CHECKBOXES AND RADIOS
            https://www.concretepage.com/angular-2/angular-2-radio-button-and-checkbox-example
        */

        this.submited = true;
        this.clearNullFields();

        // ENABLE / DISABLE WHOLE TEMPLATE DRIVEN FORM
        // this.heroForm.control.disable();
        // this.heroForm.control.enable();
        console.log('this.heroForm.disabled', this.heroForm.disabled); // true/false

        // .control and .form are the same (a little confusing)
        console.log('this.heroForm.control === this.heroForm.form', this.heroForm.control === this.heroForm.form);
    }

    disableFormControl(name: string, formGroup?: NgModelGroup) {
        if (formGroup) {
            this.heroForm.getFormGroup(formGroup).controls[name].disable();
        } else {
            this.heroForm.controls[name].disable();
        }
    }

    enableFormControl(name: string, formGroup?: NgModelGroup) {
        if (formGroup) {
            this.heroForm.getFormGroup(formGroup).controls[name].enable();
        } else {
            this.heroForm.controls[name].enable();
        }
    }

    logForm(){
        console.log('==== FORM ====');
        console.log(this.heroForm);
        console.log(this.model);
        console.log(
            this.heroForm.getFormGroup(this.userAccountFormGroup).controls['email'].valid,
            this.userAccountFormGroupEmailFormControl.valid
        );
        console.log('==== /FORM ====');

        //console.log('==== VALIDS ====');
        //console.log(this.heroForm.controls['name'].valid);
        //console.log(this.heroForm.getFormGroup(this.userAccountFormGroup).controls['email'].valid);
        //console.log(this.heroForm.getFormGroup(this.userAccountFormGroup).controls['confirmEmail'].valid);
        //console.log(this.heroForm.getFormGroup(this.userAccountFormGroup).valid);
        //console.log(this.heroForm.controls['description'].valid);
        //console.log('==== /VALIDS ====');
    }

    private clearNullFields() {
        this.heroForm.controls['code'].reset();
        this.heroForm.controls['description'].reset();  // is in a sub component

        // This wont work since email is in a formGroup
        // this.heroForm.controls['email'].reset();

        // We can get to the formGroup by using a ViewChild NgModelGroup
        this.heroForm.getFormGroup(this.userAccountFormGroup).controls['email'].reset();
        this.heroForm.getFormGroup(this.userAccountFormGroup).controls['confirmEmail'].reset();

        // (if formGroup was in a sub component, we would have to add it, like we do in special-text-area.component for a control)
        // But with: this.form.addFormGroup();
        // Then: this.heroForm.getFormGroup(referenceToFormGroup).reset();
    }
}
