import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { random } from 'lodash';
import { IJsonPlaceholder } from '../IJsonPlaceholder';
import { JsonPlaceholderService } from '../jsonPlaceholder.service';

interface ISimpleChanges extends SimpleChanges {
    jsonData: SimpleChange;
}

@Component({
    selector: 'my-bindings-child',
    templateUrl: './bindings-child.component.html'
})
export class BindingsChildComponent implements OnInit, OnDestroy, OnChanges {

    @Input() jsonData: IJsonPlaceholder; // = { id: 0, body: 'default', title: 'default', userId: 0 }; Can set default value on @Input() , can also map to another [name] by @Input('name')
    @Output() change: EventEmitter<IJsonPlaceholder> = new EventEmitter<IJsonPlaceholder>(); // it will only emit an event to the immediate parent component.

    testingViewChild: string;

    constructor(
        private jsonPlaceholderService: JsonPlaceholderService
    ) { }

    private getRandomInt(): number {
        return random(1, 100);
    }

    ngOnInit() {
        this.testingViewChild = 'hello from bindings child via @ViewChild';
        console.log('init: bindings-child component');
    }

    ngOnChanges(changes: ISimpleChanges) {
        // We can listen for changes in @Inputs an act on them like this
        if (changes.jsonData) {
            console.log('changes.jsonData', changes.jsonData);
        }
    }

    ngOnDestroy() {
        console.log('destroy: bindings-child component');
    }

    refresh() {
        this.jsonPlaceholderService.get(this.getRandomInt()).then(data => {
            this.jsonData = data;
            this.change.emit(data);
        });
    }
}
