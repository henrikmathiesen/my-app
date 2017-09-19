import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from '../shared/hero';
import { HeroService } from '../shared/hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit, OnDestroy {
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    hero: Hero;
    testRouteChangeBindings: string;

    ngOnInit() {
        console.log('HeroDetailComponent ngOnInit');

        // https://stackoverflow.com/questions/42655134/angular-2-why-use-switchmap-when-retrieving-route-params
        this.route.paramMap
            .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
            .subscribe((hero: Hero) => this.hero = hero);
    }

    ngOnDestroy() {
        console.log('HeroDetailComponent ngOnDestroy');
    }

    goBack() {
        this.location.back();
    }
}
