import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { random } from 'lodash';
import { IJsonPlaceholder } from '../IJsonPlaceholder';
import { JsonPlaceholderService } from '../jsonPlaceholder.service';

@Component({
    selector: 'bindings-sub',
    templateUrl: './bindings-sub.component.html'
})
export class BindingsSub implements OnInit, OnDestroy {

    @Input() jsonData: IJsonPlaceholder; // = { id: 0, body: 'default', title: 'default', userId: 0 }; Can set default value on @Input() , can also map to another [name] by @Input('name')
    @Output() change: EventEmitter<IJsonPlaceholder> = new EventEmitter<IJsonPlaceholder>();

    constructor(
        private jsonPlaceholderService: JsonPlaceholderService
    ) { }

    private getRandomInt(): number {
        return random(1, 100);
    }

    ngOnInit() {
        console.log('init: bindings-sub component');
    }

    ngOnDestroy() {
        console.log('destroy: bindings-sub component');
    }

    refresh() {
        this.jsonPlaceholderService.get(this.getRandomInt()).then(data => {
            this.jsonData = data;
            this.change.emit(data);
        });
    }
}
