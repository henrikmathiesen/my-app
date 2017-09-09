import { Component, OnInit, OnDestroy } from '@angular/core';
import { random } from 'lodash';
import { IJsonPlaceholder } from './IJsonPlaceholder';
import { JsonPlaceholderService } from './jsonPlaceholder.service';

@Component({
    selector: 'bindings',
    templateUrl: './bindings.component.html',
    providers: [JsonPlaceholderService]
})
export class Bindings implements OnInit, OnDestroy {

    constructor(
        private jsonPlaceholderService: JsonPlaceholderService
    ) { }

    jsonData: IJsonPlaceholder;

    private getRandomInt(): number {
        return random(1, 100);
    }

    ngOnInit() {
        console.log('init: bindings component');

        this.jsonPlaceholderService.get(this.getRandomInt()).then(data => {
            this.jsonData = data
        });
    }

    ngOnDestroy() {
        console.log('destroy: bindings component');
    }

    refresh() {
        this.jsonPlaceholderService.get(this.getRandomInt()).then(data => {
            this.jsonData = data;
        });
    }

    change(event: IJsonPlaceholder) {
        this.jsonData = event;
    }
}
