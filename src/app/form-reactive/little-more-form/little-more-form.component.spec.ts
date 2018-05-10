import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { LittleMoreFormComponent } from './little-more-form.component';

describe('LittleMoreFormComponent', () => {
    let component: LittleMoreFormComponent;
    let fixture: ComponentFixture<LittleMoreFormComponent>;

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
        const getNrOfChars = (n) => {
            let chars = '';

            for (var i = 0; i < n; i++) {
                chars += 'A';
            }

            return chars;
        };

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

            description.setValue(getNrOfChars(30));
            expect(description.hasError('minlength')).toBe(false);
        });

        it('also has a max length validation', () => {
            description.setValue(getNrOfChars(500));
            expect(description.hasError('maxlength')).toBe(false);
        });

        it('also has a max length validation', () => {
            description.setValue(getNrOfChars(501));
            expect(description.hasError('maxlength')).toBe(true);
        });
    });

    describe('validate', () => {
        let validate: AbstractControl;

        beforeEach(() => {
            validate = component.littleMoreForm.get(['validate']);
        });

        it('is not required', () => {
            expect(validate.hasError('required')).toBe(false);
        });

        it('adds the minlength validator on name when true', () => { 
            // TODO
        });
    });
});


// test switching between form and info
