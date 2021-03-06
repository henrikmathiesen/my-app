import { Component, OnInit, AfterViewInit } from '@angular/core'; // ChangeDetectorRef

@Component({
    templateUrl: './ecaihbce.component.html'
})
export class EcaihbceComponent implements OnInit, AfterViewInit {
    name = 'Iam parent component';
    text = 'A message for the child component';

    constructor(
        // private cd: ChangeDetectorRef , can be used to manually detect changes: this.cd.detectChanges();
        // use it in ngAfterViewInit(){} or ngAfterContentChecked(){}
        // https://angular.io/guide/lifecycle-hooks#lifecycle-event-sequence
    ) { }

    ngOnInit() {
        // Changing the text property, that is sent to the child, here is ok, no error.
        // this.text = 'updated text, parent ngOnInit';
    }

    ngAfterViewInit() {
        // However changing it here, AFTER it is sent to the child, results in
        // ExpressionChangedAfterItHasBeenChecked error
        // this.text = 'updated text, parent ngAfterViewInit';
    }
}
