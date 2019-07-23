/* tslint:disable */

/*

    // setup service with form builder

    import { Validators, FormBuilder } from '@angular/forms';
    import { SomeValidator } from 'app/validators';

    constructor(
        private formBuilder: FormBuilder
    ) { }

    this.formBuilder.group({
        'name': [
            Validators.required,
            Validators.pattern(ValidationConstant.something),
            SomeValidator.validate
        ]
    });

    // some validator

    import { AbstractControl } from '@angular/forms';

    export class SomeValidator { 

        static validate(control: AbstractControl): { invalidFoo: boolean } { 
            if (!control || !control.value) {
                // let other validators worry about empty values
                return null;
            }
            
            return control.value === 'foo' ? null : { invalidFoo: true };
        }

    }

    // some ts file

    this.someForm.get(['groupName', 'controlName']).hasError('invalidFoo');

*/
