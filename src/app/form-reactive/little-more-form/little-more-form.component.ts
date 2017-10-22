import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface IModel {
  name: string;
  description: string;
  validate: boolean;
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

  private descriptionLength = {
    minLength: 30,
    maxLength: 500
  };

  validationMessages = {
    name: 'You must enter a name',
    description: `Must be ${this.descriptionLength.minLength} to ${this.descriptionLength.maxLength} characters`
  };

  constructor(private formBuilder: FormBuilder) {
    this.setupForm();
  }

  ngOnInit() {
    this.subscribeToValidateFormcontrolChanges();
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

  private setupForm() {
    this.littleMoreForm = this.formBuilder.group({
      'name': [null, Validators.required],          // [defaultValue, validators]
      'description': [null, Validators.compose([
        Validators.required,
        Validators.minLength(this.descriptionLength.minLength),
        Validators.maxLength(this.descriptionLength.maxLength)
      ])],
      'validate': [false]
    })
  }

  private subscribeToValidateFormcontrolChanges() {
    // TODO: .get vs controls[name]
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

    this.validationMessages.name = 'Must be 3 characters';
  }

  private defaultNameFormControlValidationRules() {
    this.littleMoreForm.get('name').setValidators([
      Validators.required
    ]);

    this.validationMessages.name = 'You must enter a name';
  }
}
