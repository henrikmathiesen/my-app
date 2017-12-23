import { Injectable } from '@angular/core';
import { OrderHero } from '../../models/order-hero';
import { OrderHeroSupportData, Powers, FoodPreferences, PropertyRule } from '../../models/order-hero-support-data';

@Injectable()
export class HeroFormSetupService {

    setupModel(): OrderHero {
        const model = new OrderHero();

        model.id = 5;
        model.name = 'SkyDog';
        model.code = null;
        model.power = OrderHeroSupportData.staticPowers[Powers.SuperHot];
        model.foodPreference = OrderHeroSupportData.staticFoodPreferences[FoodPreferences.Pasta];
        model.description = 'Give me all you got';
        model.alterEgo = 'Terrier';
        model.isCrazy = true;
        model.isNice = false;

        return model;
    }

    setupSupportData(): OrderHeroSupportData {
        const supportData = new OrderHeroSupportData();

        supportData.codeRule = new PropertyRule();
        supportData.codeRule.isDisabled = false;
        supportData.codeRule.isRequired = true;
        supportData.codeRule.minlength = 4;
        supportData.powers = OrderHeroSupportData.staticPowers;
        supportData.foodPreferences = OrderHeroSupportData.staticFoodPreferences;

        return supportData;
    }

}
