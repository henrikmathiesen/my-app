import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { IPost } from 'app/shared/models/post.interface';
import { ErrorService } from 'app/shared/error.service';
import { ConstantsApiService } from 'app/shared/constants-api.service';

@Injectable()
export class PostsService {

    constructor(
        private http: HttpClient,
        private errorService: ErrorService,
        private constantsApiService: ConstantsApiService
    ) { }

    // If we do not reject the promise in the catch block (done by another service) the then function will run
    // If we instead had a second function to then, it would have been called
    // This is the same pattern as RXJS: https://blog.angular-university.io/rxjs-error-handling/

    getPosts(): Promise<IPost[]> {
        return this.http.get(this.constantsApiService.getJsonPlaceHolderUrl())
            .toPromise()
            .then(data => data)
            .catch(error => this.errorService.rejectPromise('posts.service', error, true));
    }

    getPost(id: number): Promise<IPost> {
        return this.http.get(this.constantsApiService.getJsonPlaceHolderUrl() + id)
            .toPromise()
            .then(data => data)
            .catch(error => this.errorService.rejectPromise('posts.service', error, true));
    }

}
