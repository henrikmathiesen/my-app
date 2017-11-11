import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsApiService {
    getJsonPlaceHolderUrl() {
        return 'http://jsonplaceholder.typicode.com/posts/';
    }
}
