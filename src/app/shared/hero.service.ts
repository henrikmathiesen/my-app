import { Injectable } from '@angular/core';
import { Hero } from './models/Hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHero(id: number): Promise<Hero> {
        const hero = HEROES.find(h => h.id === id);
        return Promise.resolve(hero);
    }
}
