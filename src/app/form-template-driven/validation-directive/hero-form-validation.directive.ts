import { Directive, Input, HostListener, OnInit, OnDestroy } from '@angular/core'; // ElementRef
import { Subject } from 'rxjs/Subject';
import { ISubscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';                // In RXJS 5.5, we can do these imports and use it bellow -- or we can use import { debounceTime, filter, map, take, toArray } from 'rxjs/operators'; and use pipe()
import { OrderHero } from '../models/order-hero';
import { OrderHeroSupportData } from '../models/order-hero-support-data';

@Directive({ selector: '[myHeroFormValidation]' })
export class HeroFormValidationDirective implements OnInit, OnDestroy {

    @Input() model: OrderHero;
    @Input() supportData: OrderHeroSupportData;

    private subject: Subject<any> = new Subject();
    private subscription: ISubscription;

    // constructor(private el: ElementRef) {} // Can get access to DOM element this way. Example: this.element.nativeElement.focus();

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
