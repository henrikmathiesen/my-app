import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { IPost } from 'app/shared/models/post.interface';
import { ErrorService } from 'app/shared/error.service';
import { ConstantsApiService } from 'app/shared/constants-api.service';

@Injectable()
export class PostsService {

    constructor(
        private http: Http,
        private errorService: ErrorService,
        private constantsApiService: ConstantsApiService
    ) { }

    get(): Promise<IPost[]> {
        return this.http.get(this.constantsApiService.getJsonPlaceHolderUrl())
            .toPromise()
            .then(data => data.json())  // this is necessary in this version of Http (but wont be in next version)
            .catch(error => this.errorService.rejectPromise('post.service', error, true));
    }

}
