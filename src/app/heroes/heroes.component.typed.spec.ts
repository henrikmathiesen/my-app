import { fakeAsync, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { HeroService } from '../shared/hero.service';
import { Hero } from '../shared/models/Hero';

describe('heroes.component typed test', () => {

    let heroesComponent: HeroesComponent;
    let mockHeroService: HeroService;
    let mockRouter: Router;

    beforeEach(() => {
        mockHeroService = <HeroService>{};
        mockHeroService.getHeroes = function () {
            const hero01: Hero = { id: 1, name: 'Henry' };
            const hero02: Hero = { id: 2, name: 'Bertha' };
            const heroes: Hero[] = new Array(hero01, hero02);
            return Promise.resolve(heroes);
        };

        mockRouter = <Router>{};
        mockRouter.navigate = function () {
            return Promise.resolve(true);
        };

        heroesComponent = new HeroesComponent(mockHeroService, mockRouter);
    });

    describe('ngOnInit', () => {

        beforeEach(() => {
            spyOn(mockHeroService, 'getHeroes').and.callThrough();
        });

        it('starts with no heroes', () => {
            expect(heroesComponent.heroes.length).toEqual(0);
        });

        it('calls service to get heroes', fakeAsync(() => {
            heroesComponent.ngOnInit();

            expect(mockHeroService.getHeroes).toHaveBeenCalled();

            tick();
            expect(heroesComponent.heroes.length).toEqual(2);
        }));

    });

    describe('onSelect', () => {
        it('starts with no selected hero', () => {
            expect(heroesComponent.selectedHero).toBe(null);
        });

        it('sets selected hero to passed in hero when onSelect is called', () => {
            const hero: Hero = { id: 3, name: 'Adam' };
            heroesComponent.onSelect(hero);
            expect(heroesComponent.selectedHero).toBe(hero);
        });
    });

    describe('gotoDetail', () => {

        beforeEach(() => {
            spyOn(mockRouter, 'navigate').and.callThrough();
        });

        it('navigates to selected hero when gotoDetail is called', () => {
            heroesComponent.selectedHero = { id: 4, name: 'Bertil' };
            heroesComponent.gotoDetail();
            expect(mockRouter.navigate).toHaveBeenCalledWith(['/detail', 4]);
        });

    });

});
