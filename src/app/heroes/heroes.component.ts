import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../shared/Hero';
import { HeroService } from '../shared/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

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

  gotoDetail(){
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
