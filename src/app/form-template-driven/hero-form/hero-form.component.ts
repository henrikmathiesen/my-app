import { Component } from '@angular/core';
import { OrderHero } from '../models/order-hero';
import { OrderHeroSupportData, Powers } from '../models/order-hero-support-data';

@Component({
    selector: 'hero-form',
    templateUrl: './hero-form.component.html'
})
export class HeroForm {
    powers: string[];
    model: OrderHero;
    submited: boolean;

    constructor() {
        this.powers = OrderHeroSupportData.powers;
        
        this.model = new OrderHero();
        this.model.id = 5;
        this.model.name = 'SkyDog';
        this.model.power = OrderHeroSupportData.powers[Powers.SuperHot];
        this.model.alterEgo = 'Terrier';
        this.model.isCrazy = true;
        this.model.isNice = false;
        
        this.submited = false;
    }

    onSubmit() {
        this.submited = true;
    }

    // TODO: debugging
    get debug(){
        return JSON.stringify(this.model);
    }
}
