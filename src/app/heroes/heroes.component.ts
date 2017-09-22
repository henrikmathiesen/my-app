import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../shared/Hero';
import { HeroService } from '../shared/hero.service';

enum UseInViewEnum {
  lorem = 1,
  ipsum = 2
}

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


  // Both of these work
  //useInViewEnum: typeof UseInViewEnum = UseInViewEnum;
  useInViewEnum = UseInViewEnum;

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
