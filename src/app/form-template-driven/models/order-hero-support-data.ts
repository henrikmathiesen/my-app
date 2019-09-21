export enum Powers {
    ReallySmart,
    SuperFlexible,
    SuperHot,
    WeatherChanger,
    CanFly
}

export enum FoodPreferences {
    Pizza,
    Pasta,
    ApplePie
}

export class PropertyRule {
    isRequired: boolean;
    isDisabled: boolean;
    minlength: number;
}

export class PowerObject {
    id: number;
    name: string;
}

export class OrderHeroSupportData {
    static readonly staticPowers: string[] = [
        'Really Smart',
        'Super Flexible',
        'Super Hot',
        'Weather Changer',
        'Can Fly'
    ];

    static readonly staticPowerObjects: PowerObject[] = [
        {
            id: 1,
            name: 'Really Smart'
        },
        {
            id: 2,
            name: 'Super Flexible'
        },
        {
            id: 3,
            name: 'Super Hot'
        },
        {
            id: 4,
            name: 'Weather Changer'
        },
        {
            id: 5,
            name: 'Can Fly'
        }
    ];

    static readonly staticFoodPreferences: string[] = [
        'Pizza',
        'Pasta',
        'Apple Pie'
    ];



    powers: string[];
    powerObjects: PowerObject[];
    foodPreferences: string[];
    codeRule: PropertyRule;
}
