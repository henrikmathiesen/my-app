/*

    // CUSTOM VALIDATOR

    // setup service with form builder

    import { SomeValidator } from 'app/validators';

    foo: [
            bar.baz,
            [
                Validators.required,
                Validators.pattern(ValidationConstant.something),
                SomeValidator.validate
            ]
        ]


        
        
    // some validator

    import { AbstractControl } from '@angular/forms';

    export class SomeValidator { 

        static validate(control: AbstractControl): { invalidFoo: boolean } { 
            if (!control || !control.value) {
                return null;
            }
            
            return bar === baz
                ? null
                : { invalidFoo: true };
        }

    }

    // some ts file

    this.someForm.get(['groupName', 'controlName']).hasError('invalidFoo');

*/
