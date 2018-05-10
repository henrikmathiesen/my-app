import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LittleMoreFormSetupFormService } from './services/little-more-form-setup-form.service';
import { LittleMoreFormSupportDataService } from './services/little-more-form-support-data.service';
import { LittleMoreFormValidateFormControlChangesService } from './services/little-more-form-validate-form-control-changes.service';

interface IModel {
  name: string;
  description: string;
  validate: boolean;
}

export interface ILittleFormValidationMessages {
  name: string;
  description: string;
}

@Component({
  selector: 'my-little-more-form',
  templateUrl: './little-more-form.component.html',
  styles: ['.alert { margin-top:-16px }'],
  providers: [
    LittleMoreFormSetupFormService,
    LittleMoreFormSupportDataService,
    LittleMoreFormValidateFormControlChangesService
  ]
})
export class LittleMoreFormComponent implements OnInit, IModel {
  @ViewChild('formInfo') formInfo: any;

  littleMoreForm: FormGroup;
  name: string;
  description: string;
  validate: boolean;

  validationMessages: ILittleFormValidationMessages = {
    name: null,
    description: null
  };

  constructor(
    private littleFormSetupFormService: LittleMoreFormSetupFormService,
    private littleMoreFormSupportDataService: LittleMoreFormSupportDataService,
    private handleValidateFormControlChangesService: LittleMoreFormValidateFormControlChangesService
  ) {
    // Maybe we should do this in ngOnInit?
    this.littleMoreForm = this.littleFormSetupFormService.setup();
    this.validationMessages.name = this.littleMoreFormSupportDataService.getNameValidationMessages().default;
    this.validationMessages.description = this.littleMoreFormSupportDataService.getDescriptionValidationMessage();
  }

  ngOnInit() {
    this.handleValidateFormControlChangesService.valueChanges(this.littleMoreForm, this.validationMessages);
  }

  onSubmit() {
    const post = this.littleMoreForm.value as IModel;

    console.log('submit', post);

    this.name = post.name;
    this.description = post.description;
    this.validate = post.validate;
  }

  showValidationError(formControlName: string) {
    // Can use either of these
    // return !this.littleMoreForm.controls[name].valid && this.littleMoreForm.controls[name].touched;
    return !this.littleMoreForm.get(formControlName).valid && this.littleMoreForm.get(formControlName).touched;
  }

  disableFormControl(name: string) {
    this.littleMoreForm.get(name).disable();
  }

  enableFormControl(name: string) {
    this.littleMoreForm.get(name).enable();
  }

  setFormControlValid(name: string) {
    this.littleMoreForm.get(name).clearValidators();
    this.littleMoreForm.get(name).updateValueAndValidity();
  }
}
