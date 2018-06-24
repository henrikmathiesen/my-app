import { Component } from '@angular/core';

@Component({
    templateUrl: './animate-css.component.html',
})
export class AnimateCss {

    triggerAnimation = false;

    onTriggerAnimation() { 
        this.triggerAnimation = true;
        setTimeout(() => this.triggerAnimation = false, 1000);
    }

}
