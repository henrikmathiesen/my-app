import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { IJsonPlaceholder } from '../IJsonPlaceholder';

@Component({
    selector: 'bindings-sub',
    templateUrl: './bindings-sub.component.html'
})
export class BindingsSub implements OnInit, OnDestroy {

    @Input() jsonData: IJsonPlaceholder;

    ngOnInit(){
        console.log('init: bindings-sub component');
    }

    ngOnDestroy(){
        console.log('destroy: bindings-sub component');
    }
}
