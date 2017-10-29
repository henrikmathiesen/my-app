import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { LittleMoreFormSupportDataService } from './little-more-form-support-data.service';
import { ILittleFormValidationMessages } from '../little-more-form.component';

@Injectable()
export class LittleMoreFormValidateFormControlChangesService {

    private littleMoreForm: FormGroup;
    private validationMessages: ILittleFormValidationMessages;

    constructor(
        private littleMoreFormSupportDataService: LittleMoreFormSupportDataService
    ){}

    valueChanges(littleMoreForm: FormGroup, validationMessages: ILittleFormValidationMessages) {
        this.littleMoreForm = littleMoreForm;
        this.validationMessages = validationMessages;

        this.littleMoreForm.get('validate').valueChanges.subscribe((value: boolean) => {
            if (value === true) {
                this.extendNameFormControlValidationRules();
            }
            else {
                this.defaultNameFormControlValidationRules();
            }

            this.littleMoreForm.get('name').updateValueAndValidity();
        });
    }

    private extendNameFormControlValidationRules() {
        this.littleMoreForm.get('name').setValidators([
            Validators.required,
            Validators.minLength(3)
        ]);

        this.validationMessages.name = this.littleMoreFormSupportDataService.getNameValidationMessages().validated;
    }

    private defaultNameFormControlValidationRules() {
        this.littleMoreForm.get('name').setValidators([
            Validators.required
        ]);

        this.validationMessages.name = this.littleMoreFormSupportDataService.getNameValidationMessages().default;
    }

}
