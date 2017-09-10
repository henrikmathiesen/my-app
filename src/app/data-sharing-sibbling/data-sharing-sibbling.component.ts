import { Component, OnInit } from '@angular/core';
import { DataSharingMediatorService } from 'app/shared/data-sharing-mediator.service';

@Component({
    selector: 'my-data-sharing-sibbling',
    templateUrl: './data-sharing-sibbling.component.html'
})
export class DataSharingSibblingComponent implements OnInit {

    message: string;

    constructor(
        private dataSharingMediatorService: DataSharingMediatorService
    ) { }

    ngOnInit() {
        this.dataSharingMediatorService.currentMessage.subscribe(message => this.message = message);
    }

    changeMessage() {
        this.dataSharingMediatorService.changeMessage('Hello from data-sharing-sibbling.component');
    }
}
