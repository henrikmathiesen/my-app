/* tslint:disable */

/*

    // TRANSCLUSION

    // alert.component.ts

    import { Component, Input } from '@angular/core';
    import { AlertTypeConstant } from 'app/models';

    @Component({
        selector: 'app-alert',
        templateUrl: './alert.component.html',
        styleUrls: ['./alert.component.scss']
    })
    export class AlertComponent {

        // If other styles in the future, make use of this in template (could also use input for dismissible)
        @Input() type: AlertTypeConstant = AlertTypeConstant.info;
        @Input() moreInfoHref: string;
        isVisible = false;

        constructor() { }

        toggleAlert() {
            this.isVisible = !this.isVisible;
        }

        closeAlert() {
            this.isVisible = false;
        }

    }

    // alert.component.html

    <div class="app-alert-container">

        <button type="button" class="app-button-info" (click)="toggleAlert()">
            <span class="fa fa-info-circle"></span>
            Info
        </button>

        <div class="alert alert-info alert-dismissible" role="alert" [hidden]="!isVisible">
            <div class="app-alert-caret visible-lg-block">
                <span class="fa fa-2x fa-caret-up"></span>
            </div>
            <button type="button" class="close" aria-label="Close" (click)="closeAlert()">
                <span aria-hidden="true">&times;</span>
            </button>
            <p class="app-text-smaller">
                <ng-content select="[alert-text]"></ng-content> <!-- A1) can select with css selectors. Use no selector, just <ng-content></ng-content> for 1 transclution -->
            </p>
            <p class="app-text-smaller" [hidden]="!moreInfoHref">
                <a href="{{moreInfoHref}}" target="_blank">&gt;
                    <ng-content select="[alert-link]"></ng-content> <!-- OBS missing in template bellow -->
                </a>
            </p>
        </div>

    </div>


    // other.html

    <app-alert>
        <span alert-text> <!-- A2) matching this attribute -->
            Lorem ipsum
        </span>
    </app-alert>

*/
