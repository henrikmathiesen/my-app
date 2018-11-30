/*

    // some.component.ts

    import { Component, ElementRef, HostListener } from '@angular/core';

    constructor(
        private el: ElementRef
    ) { }

    @HostListener(UIEventsConstant.documentClick, ['$event'])
    closeDatePickerIfClickWasOutside(event: Event) {
        const nativeElement = this.el.nativeElement;
        if (!nativeElement.contains(event.target)) {
            this.d.close();
        }
    }

    @HostListener(UIEventsConstant.documentKeyup, ['$event'])
    closeDatePickerIfKeyWasEsc(event: any) {
        if (event.key === UIEventsConstant.escape) {
            this.d.close();
        }
    }
    
    
    // ui-events.constant.ts
    
    export class UIEventsConstant {
        static readonly documentClick = 'document:click';
        static readonly documentKeyup = 'document:keyup';
        static readonly escape = 'Escape';
        static readonly esc = 'Esc';
    }

*/
