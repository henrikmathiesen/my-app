import { Component, OnInit, ViewChild } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';

import { Hero } from 'app/shared/models/hero';
import { HeroService } from 'app/shared/hero.service';
import { OrderByQueryConstants } from './order-by-query.constants';

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
    };

    filterQuery = '';
    orderByQuery = OrderByQueryConstants.nameAscending;

    constructor(
        private heroService: HeroService
    ) { }

    ngOnInit() {
        this.heroService.getHeroes().then(heroes => {
            this.heroes = heroes;
        });
    }

    showingNow(filteredHeroes: Hero[]) {
        if (!filteredHeroes) {
            return;
        }

        const nrOfItems = filteredHeroes.length;
        const maxNrOfItemsInPagedPages = this.paginationSettings.currentPage * this.paginationSettings.itemsPerPage;
        const offset = maxNrOfItemsInPagedPages - nrOfItems;
        const showingNow = (offset < 0) ? this.paginationSettings.itemsPerPage : (this.paginationSettings.itemsPerPage - offset);

        return showingNow;
    }

    orderByName() {
        this.orderByQuery = this.orderByQuery == OrderByQueryConstants.nameAscending ? OrderByQueryConstants.nameDescending : OrderByQueryConstants.nameAscending;
    }
}
