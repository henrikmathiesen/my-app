import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { random } from 'lodash';
import { IJsonPlaceholder } from './IJsonPlaceholder';
import { JsonPlaceholderService } from './jsonPlaceholder.service';
import { BindingsSub } from './bindings-sub/bindings-sub.component';

@Component({
    selector: 'bindings',
    templateUrl: './bindings.component.html',
    providers: [JsonPlaceholderService]
})
export class Bindings implements OnInit, OnDestroy, AfterViewInit {

    @ViewChild(BindingsSub) bindingsSub: BindingsSub;

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

    ngAfterViewInit() {
        // Here we can access the data from the sub component via @ViewChild
        // But changes in subcomponent does not propogate upwards. Need @Output for that(?).
        console.log('bindingsSub', this.bindingsSub.testingViewChild);
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
