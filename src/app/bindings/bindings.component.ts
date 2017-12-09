import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
import random from 'lodash.random'
import { IPost } from 'app/shared/models/post.interface';
import { PostByIdService } from './post-by-id.service';
import { BindingsChildComponent } from './bindings-child/bindings-child.component';                                      // 1) Can access sub component via ViewChild

@Component({
    selector: 'my-bindings',
    templateUrl: './bindings.component.html',
    providers: [PostByIdService]
})
export class BindingsComponent implements OnInit, OnDestroy, AfterViewInit {

    @ViewChild(BindingsChildComponent) bindingsChild: BindingsChildComponent;                                   // 2)
    @ViewChild('theSpan') theSpan: ElementRef;                                                                  // A

    jsonData: IPost;

    constructor(
        private jsonPlaceholderService: PostByIdService
    ) { }

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

    change(event: IPost) {
        this.jsonData = event;
    }
}
