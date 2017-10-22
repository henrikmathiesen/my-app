import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface IModel {
  name: string;
  description: string;
  validate: boolean;
}

@Component({
  selector: 'my-little-more-form',
  templateUrl: './little-more-form.component.html',
})
export class LittleMoreFormComponent implements IModel {
  @ViewChild('formInfo') formInfo: any;

  littleMoreForm: FormGroup;
  name: string;
  description: string;
  validate: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.setupForm();
  }

  onSubmit() {
    const post = this.littleMoreForm.value as IModel;
    
    console.log('submit', post);
    
    this.name = post.name;
    this.description = post.description;
    this.validate = post.validate;
  }

  private setupForm() {
    this.littleMoreForm = this.formBuilder.group({
      'name': [null, Validators.required],          // [defaultValue, validators]
      'description': [null, Validators.compose([
        Validators.required,
        Validators.minLength(30),
        Validators.maxLength(500)
      ])],
      'validate': [false]
    })
  }
}
