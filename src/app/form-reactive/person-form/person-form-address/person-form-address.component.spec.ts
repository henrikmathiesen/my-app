import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, AbstractControl, FormGroup, FormControl } from '@angular/forms';
import { PersonFormAddressComponent } from './person-form-address.component';

describe('PersonFormAddressComponent', () => {

    let component: PersonFormAddressComponent;
    let fixture: ComponentFixture<PersonFormAddressComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule
            ],
            declarations: [
                PersonFormAddressComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PersonFormAddressComponent);
        component = fixture.componentInstance;

        component.parentFormGroup = new FormGroup({ foo: new FormControl() });

        // This will run ngOnInit
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('starts with an invalid form group', () => {
        expect(component.personFormAddressGroup.valid).toBe(false);
    });

    describe('street', () => {
        let street: AbstractControl;

        beforeEach(() => {
            street = component.personFormAddressGroup.get(['street']);
        });

        it('is required and starts with no value, therefor starts invalid', () => {
            expect(street.value).toBe(null);
            expect(street.valid).toBe(false);
            expect(street.hasError('required')).toBe(true);
        });

        it('gets valid if user enters text', () => {
            street.setValue('Foo');
            expect(street.valid).toBe(true);
            expect(street.hasError('required')).toBe(false);
        });
    });

});
