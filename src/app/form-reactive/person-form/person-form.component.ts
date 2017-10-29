import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PersonFormSetupFormService } from './services/person-form-setup-form.service';
import { PersonFormConstantsService } from './services/person-form-constants.service';
import { IPersonModel } from './models/person-form-model';

@Component({
    selector: 'my-person-form',
    templateUrl: './person-form.component.html',
    providers: [
        PersonFormSetupFormService,
        PersonFormConstantsService
    ]
})
export class PersonFormComponent {

    personForm: FormGroup;

    constructor(
        private personFormSetupFormService: PersonFormSetupFormService
    ) {
        this.personForm = this.personFormSetupFormService.setup();
    }

    onSubmit() {
        const post = this.personForm.value as IPersonModel;

        console.log('this.personForm', this.personForm);
        console.log('this.personForm.value', post);
    }

}
