import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { random } from 'lodash';
import { ErrorService } from 'app/shared/error.service';
import { IJsonPlaceholder } from './IJsonPlaceholder';

@Component({
    selector: 'bindings',
    templateUrl: './bindings.component.html'
})
export class Bindings implements OnInit, OnDestroy {

    jsonData: IJsonPlaceholder;

    constructor(
        private http: Http,
        private errorService: ErrorService
    ) {

    }

    private getRandomInt(): number {
        return random(1, 100);
    }

    private getData(id: number): Promise<IJsonPlaceholder> {
        const url = `http://jsonplaceholder.typicode.com/postssssssss/${id}`;

        return this.http.get(url).toPromise()
            .then(data => data.json())
            .catch(error => this.errorService.rejectPromise('bindings.component', error, true));
    }

    ngOnInit() {
        console.log('init: bindings component');

        this.getData(this.getRandomInt()).then(data => {
            this.jsonData = data
        });
    }

    ngOnDestroy() {
        console.log('destroy: bindings component');
    }

    refresh() {
        this.getData(this.getRandomInt()).then(data => {
            this.jsonData = data
        });
    }
}
