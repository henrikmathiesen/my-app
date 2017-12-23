import { Directive, ElementRef, Input, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ISubscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import { OrderHero } from '../models/order-hero';
import { OrderHeroSupportData } from '../models/order-hero-support-data';

@Directive({ selector: '[myHeroFormValidation]' })
export class HeroFormValidationDirective implements OnInit, OnDestroy {

    @Input() model: OrderHero;
    @Input() supportData: OrderHeroSupportData;

    private subject: Subject<any> = new Subject();
    private subscription: ISubscription;

    // constructor(private el: ElementRef) {}

    ngOnInit() {
        this.subscription = this.subject
            .debounceTime(1000)
            .subscribe(this.log.bind(this));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    @HostListener('keyup') onKeyup() {
        this.subject.next();
    }

    private log() {
        console.log('keyup', {
            model: this.model,
            supportData: this.supportData
        });

        this.supportData.codeRule.isDisabled = true;
    }
}
