import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataSharingMediatorService } from 'app/shared/data-sharing-mediator.service';
import { ISubscription } from 'rxjs/Subscription';

@Component({
    selector: 'my-data-sharing-sibbling',
    templateUrl: './data-sharing-sibbling.component.html'
})
export class DataSharingSibblingComponent implements OnInit, OnDestroy {
    message: string;
    subscription: ISubscription;

    constructor(
        private dataSharingMediatorService: DataSharingMediatorService
    ) { }

    ngOnInit() {
        this.subscription = this.dataSharingMediatorService.currentMessage.subscribe(message => this.message = message);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    changeMessage() {
        this.dataSharingMediatorService.changeMessage('Hello from data-sharing-sibbling.component');
    }
}
