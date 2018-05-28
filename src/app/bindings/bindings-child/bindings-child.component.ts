import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import * as random from 'lodash.random';

import { IPost } from 'app/shared/models/post.interface';
import { PostsService } from 'app/shared/posts.service';
// import { BindingsComponent } from '../bindings.component';                          // 1) Can import parent component

interface ISimpleChanges extends SimpleChanges {
    post: SimpleChange;
}

@Component({
    selector: 'my-bindings-child',
    templateUrl: './bindings-child.component.html'
})
export class BindingsChildComponent implements OnInit, OnDestroy, OnChanges {

    @Input() post: IPost; // = { id: 0, body: 'default', title: 'default', userId: 0 }; Can set default value on @Input() , can also map to another [name] by @Input('name')
    @Output() change: EventEmitter<IPost> = new EventEmitter<IPost>(); // it will only emit an event to the immediate parent component.

    testingViewChild: string;

    private msg:string = 'default message';
    @Input()
    set message(msg: string) {
        console.log('changes.message', msg);
        this.msg = msg;
    }
    get message(){
        return this.msg;
    }

    constructor(
        // private bindingsComponent: BindingsComponent,                                // 2) We inject it here
                                                                                        // --- WE DO NOT go any further with this since this creates circular depencies
                                                                                        // where parent imports child and child imports parent.
                                                                                        // We can communicate to parent via EventEmitter instead
        private postsService: PostsService
    ) { }

    private getRandomInt(): number {
        return random(1, 100);
    }

    ngOnInit() {
        this.testingViewChild = 'hello from bindings child via @ViewChild';
        console.log('init: bindings-child component');
    }

    ngOnChanges(changes: ISimpleChanges) {
        /* 
            We can listen for changes in @Inputs an act on them like this
            OBS:
            "Angular only calls the hook when the value of the input property changes. 
            The value of the hero property is the reference to the hero object. 
            Angular doesn't care that the hero's own name property changed. 
            The hero object reference didn't change so, from Angular's perspective, there is no change to report!
            - https://angular.io/guide/lifecycle-hooks#onchanges
            - https://vsavkin.com/immutability-vs-encapsulation-90549ab74487
        */

        if (changes.post) {
            console.log('changes.post', changes.post);
        }
    }

    ngOnDestroy() {
        console.log('destroy: bindings-child component');
    }

    refresh() {
        this.postsService.getPost(this.getRandomInt()).then(data => {
            this.post = data;
            this.change.emit(data);
            // this.bindingsComponent.change(data);                                       // 3) Could use parents method here
        });

    }
}
