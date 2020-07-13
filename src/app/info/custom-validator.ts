/* tslint:disable */

/*

    // setup service with form builder

    import { Validators, FormBuilder } from '@angular/forms';
    import { SomeValidator } from 'app/validators';

    constructor(
        private formBuilder: FormBuilder
    ) { }

    this.formBuilder.group({
        name: [
            '',
            [
                Validators.required,
                Validators.pattern(ValidationConstant.something),
                SomeValidator.validate
            ]
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



    // NOTES
        - Injecting into a custom validator, 2 approaches:
            - SomeValidatorService, provide it, use bind in formBuilder
                https://stackoverflow.com/questions/42646440/inject-custom-service-into-a-custom-validator
            - Use a function that returns a custom validator function, execute in formBuilder and pass arguments (for example a pipe (but could be other inputs))
                https://dzone.com/articles/how-to-create-custom-validators-in-angular

*/
