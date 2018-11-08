import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// DONT IMPORT EVERYTHING, IT WILL EFFECT BUNDLE SIZE
// import {Observable} from 'rxjs/Rx';

// Instead, import what you need                                        // See hero-form-validation.directive for info on RXJS 5.5 imports
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ISubscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: './rxjs.component.html'
})
export class RxJsComponent implements OnInit, OnDestroy {
    @ViewChild('button') button: ElementRef;
    @ViewChild('buttonSwitchMap') buttonSwitchMap: ElementRef;

    private buttonElement: HTMLElement;
    private buttonSwitchMapElement: HTMLElement;

    private clickSubscription: ISubscription;
    private anotherSubscription: ISubscription;
    private subjectSubscription: ISubscription;
    private behvaviorSubjectSubscription: ISubscription;
    private httpSubjectSubscription: ISubscription;
    private switchMapSubscription: ISubscription;

    constructor(
        private http: HttpClient
    ) {

        // SE TEMPLATE FOR LINK TO DOCS

    }

    ngOnInit() {
        this.buttonElement = (this.button.nativeElement as HTMLElement);
        this.buttonSwitchMapElement = (this.buttonSwitchMap.nativeElement as HTMLElement);

        this.bindButton();
        this.subject();
        this.behaviorSubject();
        this.usingHttp();
        this.usingSwitchMap();
    }

    ngOnDestroy() {
        // There are cleaner way to unsubscribe to all these:
        // https://stackoverflow.com/questions/38008334/angular-rxjs-when-should-i-unsubscribe-from-subscription
        this.clickSubscription.unsubscribe();
        this.anotherSubscription.unsubscribe();
        this.subjectSubscription.unsubscribe();
        this.httpSubjectSubscription.unsubscribe();
        this.switchMapSubscription.unsubscribe();
    }

    private bindButton() {

        // # Observables, Subscriptions and Observers
        // - Observable (can be sync or async) -> Subscription -> Observer (next(), error(), complete() will be invoked by the Observable through the Subscription)

        // Ofcourse we should use (click) instead of ViewChild etc, but we are following a guide on rxjs ...
        // After some googleing it was not so easy to find example of (click)="onClick()" with Observable ...

        // Observable
        this.clickSubscription = Observable.fromEvent(this.buttonElement, 'click')
            // operators are a real strength of rxjs
            // http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html , "Method Summary"
            .throttleTime(2000)
            .map((event: MouseEvent) => event.clientX)
            // Subscription
            .subscribe(
                // Observer next, error, complete (might not be called for some Observables)
                (coordinate: number) => console.log('clicked', coordinate),
                (error) => { },
                () => { }
            );

        // We can also do it like this

        const observer: Observer<number> = {
            next: (value: number) => console.log(value),
            error: (error: any) => console.log(error),
            complete: () => console.log('complete')
        };

        // subscribe can take this object
        // Observable.fromEvent(button, 'click')
        //     .subscribe(observer);

        // We can create Observable from scratch

        this.anotherSubscription = Observable.create((obs: Observer<number>) => {
            obs.next(5);
            // obs.error('error'); If error, then nothing more is called
            obs.next(6);
            // obs.complete(); If complete, then nothing more is called

            this.buttonElement.addEventListener('click', () => {
                obs.next(7);
            });
        }).subscribe(observer);
    }

    private subject() {
        // # Subject
        // - Use the Observables as event emitters
        // - Subject -> Subscription -> Observer

        const subject = new Subject<number>();

        // Can pass an observer object to the subscription or just the functions (like above)
        // We can of course have several subscriptions
        // We can also use operators here, before subscribe
        this.subjectSubscription = subject.subscribe(
            (value: number) => console.log(value),
            (error) => { },
            () => { }
        );

        subject.next(99); // WE TRIGGER THE EMIT HERE (instead of reacting to an event/http call)
    }

    private behaviorSubject() {
        // Works like subjects but have a default value

        const subject = new BehaviorSubject<string>('1) default value');

        this.behvaviorSubjectSubscription = subject.subscribe(
            (value: string) => console.log(value),
            (error) => { },
            () => { }
        );

        subject.next('2) next value after default');
    }

    private usingHttp() {
        // This should have been done in a service as best practice

        const observer: Observer<any> = {
            next: (data: any) => console.log(data),
            error: (error) => console.log(error),
            complete: () => console.log('complete')
        };

        this.httpSubjectSubscription = this.http.get('https://jsonplaceholder.typicode.com/posts/')
            .map((data) => data)
            .subscribe(observer);
    }

    private usingSwitchMap() {
        // https://www.learnrxjs.io/operators/transformation/switchmap.html

        this.switchMapSubscription = Observable.fromEvent(this.buttonSwitchMapElement, 'click')
            .switchMap((event: MouseEvent) => {
                // Like a debounce(?) ...
                // Could have done a better example
                // switchMap cancels the last emission if a new one is triggered
                // "This works perfect for scenarios like typeaheads where you are no longer concerned with the response of the previous request when a new input arrives."
                return Observable.interval(3000).map(n => event.clientX);
            })
            .subscribe(
            cord => console.log('switch map clicked: ', cord),
            err => console.log('switch map error', err),
            () => console.log('switch map complete')
            );
    }
}
