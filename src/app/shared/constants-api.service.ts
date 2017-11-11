import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsApiService {
    getJsonPlaceHolderUrl() {
        return 'https://jsonplaceholder.typicode.com/posts/';
    }
}
