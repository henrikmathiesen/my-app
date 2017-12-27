import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

// DONT IMPORT EVERYTHING, IT WILL EFFECT BUNDLE SIZE
// import {Observable} from 'rxjs/Rx';

// Instead, import what you need
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/map';

// import { Subject } from 'rxjs/Subject';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { ISubscription } from 'rxjs/Subscription';

@Component({
    templateUrl: './rxjs.component.html'
})
export class RxJsComponent implements OnInit {
    @ViewChild('button') button: ElementRef;

    ngOnInit() {
        this.bindButton();
    }

    private bindButton() {
        // Ofcourse we should use (click) instead of ViewChild etc, but we are following a guide on rxjs ...
        // After some googleing it was not so easy to find example of (click)="onClick()" with Observable ...

        const button = (this.button.nativeElement as HTMLElement);
        Observable.fromEvent(button, 'click')
            // operators are a real strength of rxjs
            .throttleTime(2000)
            .map((event: MouseEvent) => event.clientX)
            .subscribe((coordinate:number) => console.log('clicked', coordinate));
    }
}
