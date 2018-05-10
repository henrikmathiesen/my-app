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
