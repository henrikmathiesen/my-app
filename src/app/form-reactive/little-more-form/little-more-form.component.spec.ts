import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { LittleMoreFormComponent } from './little-more-form.component';

// TO TEST submit, call onSubmit on the component

describe('LittleMoreFormComponent', () => {
    let component: LittleMoreFormComponent;
    let fixture: ComponentFixture<LittleMoreFormComponent>;

    const getNrOfChars = (n) => {
        let chars = '';

        for (let i = 0; i < n; i++) {
            chars += 'A';
        }

        return chars;
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule
            ],
            declarations: [
                LittleMoreFormComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LittleMoreFormComponent);
        component = fixture.componentInstance;

        // This will run ngOnInit
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should start with an invalid form', () => {
        expect(component.littleMoreForm.valid).toBe(false);
    });

    describe('name', () => {
        let name: AbstractControl;

        beforeEach(() => {
            name = component.littleMoreForm.get(['name']);
        });

        it('is required and starts with no value, therefor starts invalid', () => {
            expect(name.value).toBe(null);
            expect(name.valid).toBe(false);
            expect(name.hasError('required')).toBe(true);
        });

        it('gets valid if user enters text', () => {
            name.setValue('Foo');
            expect(name.valid).toBe(true);
            expect(name.hasError('required')).toBe(false);
        });
    });

    describe('description', () => {
        let description: AbstractControl;

        beforeEach(() => {
            description = component.littleMoreForm.get(['description']);
        });

        it('is required and starts with no value, therefor starts invalid', () => {
            expect(description.value).toBe(null);
            expect(description.valid).toBe(false);
            expect(description.hasError('required')).toBe(true);
        });

        it('also has a min length validation', () => {
            description.setValue(getNrOfChars(29));
            expect(description.hasError('minlength')).toBe(true);
            expect(description.valid).toBe(false);

            description.setValue(getNrOfChars(30));
            expect(description.hasError('minlength')).toBe(false);
            expect(description.valid).toBe(true);
        });

        it('also has a max length validation', () => {
            description.setValue(getNrOfChars(500));
            expect(description.hasError('maxlength')).toBe(false);
            expect(description.valid).toBe(true);
        });

        it('also has a max length validation', () => {
            description.setValue(getNrOfChars(501));
            expect(description.hasError('maxlength')).toBe(true);
            expect(description.valid).toBe(false);
        });
    });

    describe('validate', () => {
        let validate: AbstractControl;
        let name: AbstractControl;

        beforeEach(() => {
            validate = component.littleMoreForm.get(['validate']);
            name = component.littleMoreForm.get(['name']);
        });

        it('is starts valid', () => {
            expect(validate.valid).toBe(true);
        });

        it('adds the minlength validator on name when true', () => {
            name.setValue('AA');
            expect(name.valid).toBe(true);

            validate.setValue(true);
            expect(name.valid).toBe(false);
            expect(name.hasError('minlength')).toBe(true);
        });
    });

    describe('a valid form', () => {
        let name: AbstractControl;
        let description: AbstractControl;
        let validate: AbstractControl;

        beforeEach(() => {
            name = component.littleMoreForm.get(['name']);
            description = component.littleMoreForm.get(['description']);
            validate = component.littleMoreForm.get(['validate']);
        });

        it('starts invalid', () => {
            expect(component.littleMoreForm.valid).toBe(false);
        });

        it('gets valid', () => {
            name.setValue('John Doe');
            description.setValue(getNrOfChars(30));
            expect(component.littleMoreForm.valid).toBe(true);
        });
    });
});
