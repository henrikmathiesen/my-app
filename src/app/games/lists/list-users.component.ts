import { Component, OnInit } from '@angular/core';
import { GetGamesEntitiesService } from './services/get-games-entities.service'
import { ConstantsApiService } from 'app/shared/constants-api.service';

@Component({
    selector: 'my-list-users',
    templateUrl: './list-users.component.html',
    providers: [GetGamesEntitiesService, ConstantsApiService]
})
export class ListUsers implements OnInit {
    constructor(
        private getGamesEntitiesService: GetGamesEntitiesService,
        private constantsApiService: ConstantsApiService
    ) { }

    ngOnInit() {
        this.getGamesEntitiesService.get(this.constantsApiService.getGamesEntities().users)
            .then(data => {
                console.log(data);
            });
    }
}
