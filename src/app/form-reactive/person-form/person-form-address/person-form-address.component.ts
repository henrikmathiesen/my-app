import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PersonFormAddressSetupFormService } from './services/person-form-address-setup-form.service';
import { PersonFormAddressConstantsService } from './services/person-form-address-constants.service';

@Component({
    selector: 'my-person-form-address',
    templateUrl: './person-form-address.component.html',
    providers: [
        PersonFormAddressSetupFormService,
        PersonFormAddressConstantsService
    ]
})
export class PersonFormAddressComponent implements OnInit {
    @Input() parentFormGroup: FormGroup;
    personFormAddressGroup: FormGroup;

    constructor(private personFormAddressSetupFormService: PersonFormAddressSetupFormService) {
        this.personFormAddressGroup = this.personFormAddressSetupFormService.setup();
    }

    ngOnInit(){
        this.personFormAddressSetupFormService.addFormGroupToParent(this.personFormAddressGroup, this.parentFormGroup);
    }
}
