/* tslint:disable */

/* 


    # Checkboxes
        - name attribute is not required
        - https://getbootstrap.com/docs/4.4/components/forms/
        - Using just new FormGroup here, could also use FormBuilder
            - https://stackoverflow.com/questions/44307002/using-nested-objects-in-formbuilder
                - // make a nested group
        - dont forget attr.aria-invalid and attr.aria-describedby form validation error connection
            - https://www.w3.org/WAI/tutorials/forms/notifications/
        - required is enough, instead of aria-required


    // .html

    <form [formGroup]="someForm" (ngSubmit)="submit()">
        <fieldset class="form-group" formGroupName="subFormGroup">
            <legend>Legend</legend>
            <div class="custom-control custom-checkbox">
                <input class="custom-control-input" type="checkbox" id="foo" aria-required="true" formControlName="foo">
                <label class="custom-control-label" for="foo">
                    Choose foo?
                </label>
            </div>
            <div class="custom-control custom-checkbox">
                <input class="custom-control-input" type="checkbox" id="bar" aria-required="true" formControlName="bar">
                <label class="custom-control-label" for="bar">
                    Choose bar?
                </label>
            </div>
        </fieldset>
    </form>

    // .ts

    this.someForm = new FormGroup({
            subFormGroup: new FormGroup({
                foo: new FormControl(data.sub.foo),                                         // booleans
                bar: new FormControl(data.sub.bar)
            }),
            atleastOneChosen: new FormControl(false, [Validators.requiredTrue])             // subscribe to valueChanges of subFormGroup, callback returns an object, loop object(?), check if at least one checked, set this to true/false
        });









    # Radios
        - should have the name attribute
        - https://getbootstrap.com/docs/4.4/components/forms/
        - Using just new FormGroup here, could also use FormBuilder
        - dont forget attr.aria-invalid and attr.aria-describedby form validation error connection
            - https://www.w3.org/WAI/tutorials/forms/notifications/
        - required is enough, instead of aria-required

    
    // .html

    <form [formGroup]="someForm" (ngSubmit)="submit()">
        <fieldset class="form-group">
            <legend>Legend</legend>
            <div class="custom-control custom-radio">
                <input type="radio" class="custom-control-input" name="hungry" formControlName="hungry" id="hungry-yes" aria-required="true" [value]="jaNejEnum.ja" />
                <label for="hungry-yes" class="custom-control-label">{{ jaNejEnum.ja }}</label>
            </div>
            <div class="custom-control custom-radio">
                <input type="radio" class="custom-control-input" name="hungry" formControlName="hungry" id="hungry-no" aria-required="true" [value]="jaNejEnum.nej" />
                <label for="hungry-no" class="custom-control-label">{{ jaNejEnum.nej }}</label>
            </div>
        </fieldset>
    </form>


    // .ts

    this.someForm = new FormGroup({
        hungry: new FormControl(data.hungry, [Validators.required]) // data.hungry is a jaNejEnum or string
    })

*/
