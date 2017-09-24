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

export class OrderHeroSupportData {
    static readonly staticPowers: string[] = [
        'Really Smart',
        'Super Flexible',
        'Super Hot',
        'Weather Changer',
        'Can Fly'
    ];

    static readonly staticFoodPreferences: string[] = [
        'Pizza',
        'Pasta',
        'Apple Pie'
    ]

    powers: string[];
    foodPreferences: string[];
    codeRule: PropertyRule;
}
