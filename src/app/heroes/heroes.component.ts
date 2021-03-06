import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../shared/models/Hero';
import { HeroService } from '../shared/hero.service';

enum UseInViewEnum {
  Lorem = 1,
  Ipsum = 2
}

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero: Hero = null;

  // Both of these work
  // useInViewEnum: typeof UseInViewEnum = UseInViewEnum;
  readonly useInViewEnum = UseInViewEnum;

  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
