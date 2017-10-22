import { Injectable } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { LittleFormSupportDataService } from './little-more-form-support-data.service';

@Injectable()
export class LittleMoreFormSetupFormService {

    constructor(
        private formBuilder: FormBuilder,
        private littleFormSupportDataService: LittleFormSupportDataService
    ) { }

    setup() {
        return this.formBuilder.group({
            'name': [null, Validators.required],          // [defaultValue, validators]
            'description': [null, Validators.compose([
                Validators.required,
                Validators.minLength(this.littleFormSupportDataService.getDescriptionLengths().minLength),
                Validators.maxLength(this.littleFormSupportDataService.getDescriptionLengths().maxLength)
            ])],
            'validate': [false]
        })
    }

}
