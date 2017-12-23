import { Injectable } from '@angular/core';

export class LittleMoreFormSupportDataService {

    getDescriptionLengths() {
        return {
            minLength: 30,
            maxLength: 500
        };
    }

    getNameValidationMessages() {
        return {
            default: 'You must enter a name',
            validated: 'Must be 3 characters'
        };
    }

    getDescriptionValidationMessage() {
        return `Must be ${this.getDescriptionLengths().minLength} to ${this.getDescriptionLengths().maxLength} characters`;
    }

}
