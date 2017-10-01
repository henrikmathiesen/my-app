import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { HeroService } from '../shared/hero.service';
import { Hero } from '../shared/hero';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    heroes: Hero[];

    constructor(
        //private router: Router,
        private heroService: HeroService
    ) {}

    ngOnInit() {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(0,5));
    }

    // necessary if no a/button
    // goToDetail(id: number) {
    //     this.router.navigate(['/detail', id]);
    // }
}
