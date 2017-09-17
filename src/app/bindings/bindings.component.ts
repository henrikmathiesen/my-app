import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
import { random } from 'lodash';
import { IJsonPlaceholder } from './IJsonPlaceholder';
import { JsonPlaceholderService } from './jsonPlaceholder.service';
import { BindingsChild } from './bindings-child/bindings-child.component';                                      // 1) Can access sub component via ViewChild

@Component({
    selector: 'bindings',
    templateUrl: './bindings.component.html',
    providers: [JsonPlaceholderService]
})
export class Bindings implements OnInit, OnDestroy, AfterViewInit {

    @ViewChild(BindingsChild) bindingsChild: BindingsChild;                                                     // 2)
    @ViewChild('theSpan') theSpan: ElementRef;                                                                  // A

    constructor(
        private jsonPlaceholderService: JsonPlaceholderService
    ) { }

    jsonData: IJsonPlaceholder;

    private getRandomInt(): number {
        return random(1, 100);
    }

    ngOnInit() {
        console.log('init: bindings component');

        // Can manipulate DOM elements like this. Allthough should we?
        (this.theSpan.nativeElement as HTMLElement).classList.add('test');                                        // B

        this.jsonPlaceholderService.get(this.getRandomInt()).then(data => {
            this.jsonData = data
        });
    }

    ngAfterViewInit() {
        // Here we can access the data from the sub component via @ViewChild, but changes in subcomponent does not propogate upwards. Need @Output for that.
        console.log('bindingsChild', this.bindingsChild.testingViewChild);                                      // 3
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