import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from '../shared/hero';
import { HeroService } from '../shared/hero.service';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    hero: Hero;

    ngOnInit() {
        // https://stackoverflow.com/questions/42655134/angular-2-why-use-switchmap-when-retrieving-route-params
        this.route.paramMap
            .switchMap((params: ParamMap) =>  this.heroService.getHero(+params.get('id')))
            .subscribe((hero: Hero) => this.hero = hero);
    }

    goBack(){
        this.location.back();
    }
}
