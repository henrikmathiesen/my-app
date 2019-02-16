import { Injectable } from '@angular/core';
import { PersonFormCheckValiditySelectableControlModel } from '../models/person-form-check-validity-selectable-control-model';
import { PersonFormConstantsService } from '../../services/person-form-constants.service';
import { PersonFormAddressConstantsService } from '../../person-form-address/services/person-form-address-constants.service';

@Injectable()
export class PersonFormCheckValiditySetupService {

    constructor(
        private personFormConstantsService: PersonFormConstantsService,
        private personFormAddressConstantsService: PersonFormAddressConstantsService
    ) { }

    setupSelectableControls(): Array<PersonFormCheckValiditySelectableControlModel> {
        const firstName = new PersonFormCheckValiditySelectableControlModel();
        firstName.formControlName = this.personFormConstantsService.getFormControlNames().firstName;
        firstName.formGroupName = null;
        firstName.label = 'First Name';

        const lastName = new PersonFormCheckValiditySelectableControlModel();
        lastName.formControlName = this.personFormConstantsService.getFormControlNames().lastName;
        lastName.formGroupName = null;
        lastName.label = 'Last Name';

        const nickName = new PersonFormCheckValiditySelectableControlModel();
        nickName.formControlName = this.personFormConstantsService.getFormControlNames().nickName;
        nickName.formGroupName = null;
        nickName.label = 'Nickname';

        const street = new PersonFormCheckValiditySelectableControlModel();
        street.formControlName = this.personFormAddressConstantsService.getFormControlNames().street;
        street.formGroupName = this.personFormAddressConstantsService.getFormControlNames().address;
        street.label = 'Street';

        const postalCode = new PersonFormCheckValiditySelectableControlModel();
        postalCode.formControlName = this.personFormAddressConstantsService.getFormControlNames().postalCode;
        postalCode.formGroupName = this.personFormAddressConstantsService.getFormControlNames().address;
        postalCode.label = 'Postal Code';

        const city = new PersonFormCheckValiditySelectableControlModel();
        city.formControlName = this.personFormAddressConstantsService.getFormControlNames().city;
        city.formGroupName = this.personFormAddressConstantsService.getFormControlNames().address;
        city.label = 'City';

        const controls = new Array<PersonFormCheckValiditySelectableControlModel>();
        controls.push(firstName, lastName, nickName, street, postalCode, city);

        return controls;
    }

}
