import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { random } from 'lodash';

interface IJsonPlaceholder {
    userId: number;
    id: number;
    title: string;
    body: string;
}

@Component({
    selector: 'bindings',
    templateUrl: './bindings.component.html'
})
export class Bindings implements OnInit {

    jsonData: IJsonPlaceholder;

    constructor(
        private http: Http
    ) {

    }

    private getRandomInt(): number {
        return random(1,100);
    }

    private getData(id: number): Promise<IJsonPlaceholder> {
        const url = `http://jsonplaceholder.typicode.com/posts/${id}`;
        return this.http.get(url).toPromise()
            .then(data => data.json())
            .catch(error => Promise.reject(JSON.stringify({ component: 'bindings.component', error }))); // TODO: extract this
    }

    ngOnInit() {
        console.log('init');
        this.getData(this.getRandomInt()).then(data => {
            console.log('got data', data);
            this.jsonData = data
        });
    }

    ngOnDestroy() {
        console.log('destroy');
    }
}
