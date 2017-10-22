import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LittleMoreFormSetupFormService } from './services/little-more-form-setup-form.service';
import { LittleMoreFormValidateFormControlChangesService } from './services/little-more-form-validate-form-control-changes.service';
import { LittleFormSupportDataService } from './services/little-more-form-support-data.service';

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
  styles: ['.alert { margin-top:-16px }']
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
    private handleValidateFormControlChangesService: LittleMoreFormValidateFormControlChangesService,
    private littleFormSupportDataService: LittleFormSupportDataService
  ) {
    this.littleMoreForm = this.littleFormSetupFormService.setup();
    this.validationMessages.name = this.littleFormSupportDataService.getNameValidationMessages().default;
    this.validationMessages.description = this.littleFormSupportDataService.getDescriptionValidationMessage();
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

  showValidationError(name: string) {
    return !this.littleMoreForm.controls[name].valid && this.littleMoreForm.controls[name].touched;
  }
}
