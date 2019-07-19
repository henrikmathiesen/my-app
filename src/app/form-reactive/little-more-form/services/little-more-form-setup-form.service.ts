import { Injectable } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { LittleMoreFormSupportDataService } from './little-more-form-support-data.service';

@Injectable()
export class LittleMoreFormSetupFormService {

    constructor(
        private formBuilder: FormBuilder,
        private littleMoreFormSupportDataService: LittleMoreFormSupportDataService
    ) { }

    setup() {
        return this.formBuilder.group({
            'name': [null, Validators.required],          // [defaultValue, validators]
            'description': [null, Validators.compose([
                Validators.required,
                Validators.minLength(this.littleMoreFormSupportDataService.getDescriptionLengths().minLength),
                Validators.maxLength(this.littleMoreFormSupportDataService.getDescriptionLengths().maxLength)
            ])],
            'validate': [false]
        });

        // Validators.compose is not necessary anymore
        // https://stackoverflow.com/questions/42394999/why-should-i-use-validators-compose
    }

}
