import { Component, OnInit } from '@angular/core';
import { HeroService } from '../shared/hero.service';
import { Hero } from '../shared/models/hero';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    heroes: Hero[];
    containerBool = true;

    constructor(
        // private router: Router,
        private heroService: HeroService
    ) { }

    ngOnInit() {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(0, 5));
    }

    // necessary if no a/button
    // goToDetail(id: number) {
    //     this.router.navigate(['/detail', id]);
    // }
}
