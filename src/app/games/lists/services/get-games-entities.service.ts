import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { ConstantsApiService } from 'app/shared/constants-api.service';
import { ErrorService } from 'app/shared/error.service';

@Injectable()
export class GetGamesEntitiesService {
    constructor(
        private http: Http,
        private errorService: ErrorService,
        private constantsApiService: ConstantsApiService
    ) { }

    get(entity: string): Promise<any> { // TODO: type it
        return this.http.get(this.constantsApiService.getGamesUrl() + entity)
        .toPromise()
        .then(data => data.json())  // this is necessary in this version of Http (but wont be in next version)
        .catch(error => this.errorService.rejectPromise('getGamesEntities.service', error, true));
    }
}
