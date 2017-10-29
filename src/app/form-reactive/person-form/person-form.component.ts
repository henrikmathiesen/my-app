import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PersonFormSetupFormService } from './services/person-form-setup-form.service';

@Component({
    selector: 'my-person-form',
    templateUrl: './person-form.component.html'
})
export class PersonFormComponent {

    personForm: FormGroup;

    constructor(
        private personFormSetupFormService: PersonFormSetupFormService
    ) {
        this.personForm = this.personFormSetupFormService.setup();
    }

    onSubmit() {

    }

}
