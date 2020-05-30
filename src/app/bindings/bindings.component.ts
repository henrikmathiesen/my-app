import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
import * as random from 'lodash.random';

import { IPost } from 'app/shared/models/post.interface';
import { PostsService } from 'app/shared/posts.service';
import { BindingsChildComponent } from './bindings-child/bindings-child.component';                              // 1) Can import sub component

@Component({
    selector: 'my-bindings',
    templateUrl: './bindings.component.html'
})
export class BindingsComponent implements OnInit, OnDestroy, AfterViewInit {

    @ViewChild(BindingsChildComponent) bindingsChild: BindingsChildComponent;                                   // 2) And access it via ViewChild
    @ViewChild('theSpan') theSpan: ElementRef;                                                                  // A) Can grab a DOM element like this

    /* tslint:disable */
    
    /*

        https://netbasal.com/understanding-viewchildren-contentchildren-and-querylist-in-angular-896b0c689f6e

        When the parameter is a component/directive the return value will be the component/directive instance.
        When the parameter is the name of a template variable, the return value will be a reference to the native element.
        But you can ask for other tokens.


        If several children of same type
            @ViewChildren(AlertComponent) alerts: QueryList<AlertComponent>

        ngAfterViewInit() {
            this.alerts.forEach(alertInstance => console.log(alertInstance));
        }

        The QueryList for ViewChildren and ViewChild component instance is available in ngAfterViewInit.


        ViewChild(ren) vs ContentChild(ren)

            - https://angular.io/api/core/ContentChild
            - https://angular.io/api/core/ContentChildren

            ViewChildren don’t include elements that exist within the ng-content tag.
            ContentChildren includes only elements that exists within the ng-content tag.
            (see also info/transclusion.info.ts)

            The QueryList for ContentChildren and ContentChild component instance is available in ngAfterContentInit.
            
            https://angular.io/guide/lifecycle-hooks

    */

    /* tslint:enable */

    post: IPost;

    constructor(
        private postsService: PostsService
        // Can also get access to this component's native DOM element by injecting it here. See hero-form-validation.directive.ts and host-listener.info.ts
    ) { }

    private getRandomInt(): number {
        return random(1, 100);
    }

    ngOnInit() {
        console.log('init: bindings component');

        (this.theSpan.nativeElement as HTMLElement).classList.add('test');                                        // B) And manipulate it (Allthough should we?)

        this.postsService.getPost(this.getRandomInt()).then(data => {
            this.post = data;
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
        this.postsService.getPost(this.getRandomInt()).then(data => {
            this.post = data;
        });
    }

    change(event: IPost) {                                                                                            // 4) Child is outputting a change event that we can bind to (see template also)
        this.post = event;
    }
}
