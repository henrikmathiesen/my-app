import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

// DONT IMPORT EVERYTHING, IT WILL EFFECT BUNDLE SIZE
// import {Observable} from 'rxjs/Rx';

// Instead, import what you need
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { ISubscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/map';

@Component({
    templateUrl: './rxjs.component.html'
})
export class RxJsComponent implements OnInit, OnDestroy {
    @ViewChild('button') button: ElementRef;

    private clickSubscription: ISubscription;
    private anotherSubscription: ISubscription;

    ngOnInit() {
        this.bindButton();
    }

    ngOnDestroy() {
        this.clickSubscription.unsubscribe();
        this.anotherSubscription.unsubscribe();
    }

    private bindButton() {
        // Ofcourse we should use (click) instead of ViewChild etc, but we are following a guide on rxjs ...
        // After some googleing it was not so easy to find example of (click)="onClick()" with Observable ...

        const button = (this.button.nativeElement as HTMLElement);
        // Observable
        this.clickSubscription = Observable.fromEvent(button, 'click')
            // operators are a real strength of rxjs
            .throttleTime(2000)
            .map((event: MouseEvent) => event.clientX)
            // Subscription
            .subscribe(
            // Observer next, error, complete (might not be called for some Observables)
            (coordinate: number) => console.log('clicked', coordinate),
            (error) => { },
            () => { });

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

            button.addEventListener('click', () => { 
                obs.next(7);
            });
        }).subscribe(observer);
    }
}
