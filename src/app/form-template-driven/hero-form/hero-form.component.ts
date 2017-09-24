import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderHero } from '../models/order-hero';
import { OrderHeroSupportData, Powers, FoodPreferences, PropertyRule } from '../models/order-hero-support-data';

@Component({
    selector: 'hero-form',
    templateUrl: './hero-form.component.html'
})
export class HeroForm {
    @ViewChild('heroForm') heroForm: NgForm;

    supportData: OrderHeroSupportData;
    model: OrderHero;
    submited: boolean;

    constructor() {
        this.setUpModel();
        this.setUpSupportData();
        this.submited = false;
    }

    onSubmit() {
        // We make a copy, because clearNullFields() will clear properties on model before console.log() prints
        const postModel = Object.assign({}, this.model);
        console.log('HeroForm, onSubmit', postModel);

        this.submited = true;
        this.clearNullFields();
    }

    private setUpModel() {
        this.model = new OrderHero();
        this.model.id = 5;
        this.model.name = 'SkyDog';
        this.model.code = null;
        this.model.power = OrderHeroSupportData.staticPowers[Powers.SuperHot];
        this.model.foodPreference = OrderHeroSupportData.staticFoodPreferences[FoodPreferences.Pasta];
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
    }
}
