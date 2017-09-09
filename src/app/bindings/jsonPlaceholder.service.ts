import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { IJsonPlaceholder } from './IJsonPlaceholder';
import { ErrorService } from 'app/shared/error.service';

@Injectable()
export class JsonPlaceholderService {

    constructor(
        private http: Http,
        private errorService: ErrorService
    ) { }

    private url = `http://jsonplaceholder.typicode.com/posts/`;

    get(id: number): Promise<IJsonPlaceholder> {
        return this.http.get(this.url + id).toPromise()
        .then(data => data.json())  // this is necessary in this version of Http (but wont be in next version)
        .catch(error => this.errorService.rejectPromise('jsonPlaceholder.service', error, true));
    }

}
