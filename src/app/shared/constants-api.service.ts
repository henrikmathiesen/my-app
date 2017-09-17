import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsApiService {
    getJsonPlaceHolderUrl() {
        return 'http://jsonplaceholder.typicode.com/posts/';
    }

    getGamesUrl() {
        return 'http://localhost:1337/api/'
    }

    getGamesEntities(){
        return {
            users: 'users',
            games: 'games',
            reviews: 'reviews'
        }
    }
}
