/* tslint:disable */

/* 

    https://angular.io/guide/attribute-directives

    There are three kinds of directives in Angular:
        # Components—directives with a template.
        # Structural directives—change the DOM layout by adding and removing DOM elements. Like *ngIf
        # Attribute directives—change the appearance or behavior of an element, component, or another directive. Like ngClass

    
        import { Directive, ElementRef, HostListener, Input } from '@angular/core';
        import { NgControl } from '@angular/forms';

        @Directive({
            selector: '[appHighlight]'
        })
        export class HighlightDirective {

            constructor(private el: ElementRef, private ngControl: NgControl) { }                       // Can inject element, and on a formControl the actual formControl, https://github.com/angular/angular/issues/35330

            @Input() highlightColor: string;                                                            // A1
            @Input('appHighlight') highlightColor: string;                                              // B1

            @HostListener('mouseenter') onMouseEnter() {
                this.highlight(this.highlightColor || 'red');
            }

            @HostListener('mouseleave') onMouseLeave() {
                this.highlight(null);
            }

            private highlight(color: string) {
                this.el.nativeElement.style.backgroundColor = color;
            }
        }

        <p appHighlight [highlightColor]="color">Highlighted with parent component's color</p>          // A2
        <p appHighlight highlightColor="yellow">Highlighted in yellow</p>                               // A3 (dont need [] for simple string)
        <p [appHighlight]="color">Highlight me!</p>                                                     // B2

*/
