import { PowerObject } from './order-hero-support-data';

export class OrderHero {
    id: number;
    name: string;
    code: string;
    power: string;
    powerObject: PowerObject;
    foodPreference: string;
    description: string;
    alterEgo?: string;
    isCrazy: boolean;
    isNice: boolean;
    email: string;
    confirmEmail: string;
}
