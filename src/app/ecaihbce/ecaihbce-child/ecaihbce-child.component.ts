import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { EcaihbceComponent } from '../ecaihbce.component';

@Component({
    selector: 'my-ecaihbce-child',
    templateUrl: './ecaihbce-child.component.html'
})
export class EcaihbceChildComponent implements OnInit, AfterViewInit {
    @Input() text: string;

    constructor(
        private ecaihbceComponent: EcaihbceComponent
    ) { }

    ngOnInit() {
        // 1) Here we change the text property of the parent
        // after the bindings (onChanges) has been processed

        // In other words we update the text property on the parent
        // after it is sent to the child

        // This results in the error: ExpressionChangedAfterItHasBeenChecked

        // this.ecaihbceComponent.text = 'updated text';

        // -----------------------------------------------------------------

        // 2A) The name property is rendered in the DOM in the parent component.
        // If we change it here BEFORE it is rendered in the DOM in parent
        // then there is no error.
        // this.ecaihbceComponent.name = 'updated name';
    }

    ngAfterViewInit() {
        // 2B) However if we change it in this life cycle hook, AFTER it is rendered in DOM in parent
        // then we get the ExpressionChangedAfterItHasBeenChecked error.
        // this.ecaihbceComponent.name = 'updated name';
    }
}
