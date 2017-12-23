import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';

import { Hero } from 'app/shared/models/hero';
import { HeroService } from 'app/shared/hero.service';

interface IPaginationInstance extends PaginationInstance {
    selectableItemsPerPage: number[];
}

@Component({
    templateUrl: './paging.component.html',
    styleUrls: [
        './paging.component.scss'
    ]
})
export class PagingComponent implements OnInit {

    heroes: Hero[];
    paginationSettings: IPaginationInstance = {
        itemsPerPage: 5,
        currentPage: 1,
        selectableItemsPerPage: [
            5,
            10,
            20
        ]
    }
    filterQuery: string = '';

    constructor(
        private heroService: HeroService
    ) { }

    ngOnInit() {
        this.heroService.getHeroes().then(heroes => {
            this.heroes = heroes;
        });
    }

    showingCount(filteredHeroes: Hero[]) {
        //console.log(filteredHeroes);

        if (!filteredHeroes) {
            return;
        }
    }
}
