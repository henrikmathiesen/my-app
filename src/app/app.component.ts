import { Component, OnInit } from '@angular/core';
import { Hero } from './Hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {

  constructor(private heroService: HeroService) {

  }

  title = 'Tour of Heroes';

  hero: Hero = {
    id: null,
    name: null
  }

  heroes: Hero[];

  selectedHero: Hero;

  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
