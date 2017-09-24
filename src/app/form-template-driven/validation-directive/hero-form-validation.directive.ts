import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[hero-form-validation]' })
export class HeroFormValidationDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }
}
