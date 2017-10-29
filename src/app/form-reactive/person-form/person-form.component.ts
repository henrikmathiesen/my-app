import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PersonFormSetupFormService } from './services/person-form-setup-form.service';
import { PersonFormConstantsService } from './services/person-form-constants.service';
import { IPersonFormModel } from './models/person-form-model';

@Component({
    selector: 'my-person-form',
    templateUrl: './person-form.component.html',
    providers: [
        PersonFormSetupFormService,
        PersonFormConstantsService
    ]
})
export class PersonFormComponent {

    personFormGroup: FormGroup;

    constructor(
        private personFormSetupFormService: PersonFormSetupFormService
    ) {
        this.personFormGroup = this.personFormSetupFormService.setup();
    }

    onSubmit() {
        const post = this.personFormGroup.value as IPersonFormModel;

        console.log('this.personForm', this.personFormGroup);
        console.log('this.personForm.value', post);
    }

}
