import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { IJsonPlaceholder } from './IJsonPlaceholder';
import { ErrorService } from 'app/shared/error.service';
import { ConstantsApiService } from 'app/shared/constants-api.service';

@Injectable()
export class JsonPlaceholderService {

    constructor(
        private http: Http,
        private errorService: ErrorService,
        private constantsApiService: ConstantsApiService
    ) { }

    get(id: number): Promise<IJsonPlaceholder> {
        return this.http.get(this.constantsApiService.getJsonPlaceHolderUrl() + id)
            .toPromise()
            .then(data => data.json())  // this is necessary in this version of Http (but wont be in next version)
            .catch(error => this.errorService.rejectPromise('jsonPlaceholder.service', error, true));
    }

}
