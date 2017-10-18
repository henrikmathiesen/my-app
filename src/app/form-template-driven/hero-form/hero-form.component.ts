import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModelGroup } from '@angular/forms';
import { OrderHero } from '../models/order-hero';
import { OrderHeroSupportData, Powers, FoodPreferences, PropertyRule } from '../models/order-hero-support-data';

@Component({
    selector: 'my-hero-form',
    templateUrl: './hero-form.component.html',
    styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent {
    @ViewChild('heroForm') heroForm: NgForm;
    @ViewChild('userAccountFormGroup') userAccountFormGroup: NgModelGroup;

    supportData: OrderHeroSupportData;
    model: OrderHero;
    submited: boolean;

    constructor() {
        this.setUpModel();
        this.setUpSupportData();
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
            - It is better to use [ngModel] as a one way binding, if we want to set fiels with values
            - The posted form data can be get by using this.heroForm.value
            - Allthough note that the name attributes will be used as properties on the object, so snake case is not recommended (food-preference)
            https://toddmotto.com/angular-2-forms-template-driven#ngmodel-ngmodel-and-ngmodel

            BUT
            - hero-form-validation does dynamic validation on the updated model, so it needs 2 way binding
            - But we could perhaps use this.heroForm.valueChanges.subscribe
        */

        this.submited = true;
        this.clearNullFields();

        // ENABLE / DISABLE WHOLE TEMPLATE DRIVEN FORM
        //this.heroForm.control.disable();
        //this.heroForm.control.enable();
        console.log('this.heroForm.disabled', this.heroForm.disabled); // true/false
    }

    private setUpModel() {
        this.model = new OrderHero();
        this.model.id = 5;
        this.model.name = 'SkyDog';
        this.model.code = null;
        this.model.power = OrderHeroSupportData.staticPowers[Powers.SuperHot];
        this.model.foodPreference = OrderHeroSupportData.staticFoodPreferences[FoodPreferences.Pasta];
        this.model.description = 'Give me all you got';
        this.model.alterEgo = 'Terrier';
        this.model.isCrazy = true;
        this.model.isNice = false;
    }

    private setUpSupportData() {
        this.supportData = new OrderHeroSupportData();
        this.supportData.codeRule = new PropertyRule();
        this.supportData.codeRule.isDisabled = false;
        this.supportData.codeRule.isRequired = true;
        this.supportData.codeRule.minlength = 4;
        this.supportData.powers = OrderHeroSupportData.staticPowers;
        this.supportData.foodPreferences = OrderHeroSupportData.staticFoodPreferences;
    }

    private clearNullFields() {
        this.heroForm.controls['code'].reset();
        this.heroForm.controls['description'].reset();

        // This wont work since email is in a formGroup
        // this.heroForm.controls['email'].reset();

        // We can get to the formGroup by using a ViewChild NgModelGroup 
        // (if formGroup was in a sub component, we would have to add it, like we do in special-text-area.component for a control)
        this.heroForm.getFormGroup(this.userAccountFormGroup).controls['email'].reset();
        this.heroForm.getFormGroup(this.userAccountFormGroup).controls['confirmEmail'].reset();
    }
}
