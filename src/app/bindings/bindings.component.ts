import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
import random from 'lodash.random'
import { IPost } from 'app/shared/models/post.interface';
import { PostByIdService } from './post-by-id.service';
import { BindingsChildComponent } from './bindings-child/bindings-child.component';                              // 1) Can import sub component

@Component({
    selector: 'my-bindings',
    templateUrl: './bindings.component.html',
    providers: [PostByIdService]
})
export class BindingsComponent implements OnInit, OnDestroy, AfterViewInit {

    @ViewChild(BindingsChildComponent) bindingsChild: BindingsChildComponent;                                   // 2) And access it via ViewChild
    @ViewChild('theSpan') theSpan: ElementRef;                                                                  // A) Can grab a DOM element like this

    post: IPost;

    constructor(
        private postByIdService: PostByIdService
    ) { }

    private getRandomInt(): number {
        return random(1, 100);
    }

    ngOnInit() {
        console.log('init: bindings component');

        (this.theSpan.nativeElement as HTMLElement).classList.add('test');                                        // B) And manipulate it (Allthough should we?)

        this.postByIdService.get(this.getRandomInt()).then(data => {
            this.post = data
        });
    }

    ngAfterViewInit() {
        // Here we can access the data from the sub component via @ViewChild, but changes in subcomponent does not propogate upwards. Need @Output for that.
        console.log('bindingsChild', this.bindingsChild.testingViewChild);                                          // 3
    }

    ngOnDestroy() {
        console.log('destroy: bindings component');
    }

    refresh() {
        this.postByIdService.get(this.getRandomInt()).then(data => {
            this.post = data;
        });
    }

    change(event: IPost) {                                                                                            // 4) Child is outputting a change event that we can bind to (see template also)
        this.post = event;
    }
}
