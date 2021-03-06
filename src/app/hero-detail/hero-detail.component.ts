import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';                   // See hero-form-validation.directive for info on RXJS 5.5 imports

import { Hero } from '../shared/models/hero';
import { HeroService } from '../shared/hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit, OnDestroy {
    hero: Hero;
    testRouteChangeBindings: string;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

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
