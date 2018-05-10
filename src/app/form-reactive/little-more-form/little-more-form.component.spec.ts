import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
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
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should start with an invalid form', () => { 
        expect(component.littleMoreForm.valid).toBeFalsy();
        expect(component.littleMoreForm.get(['name']).valid).toBeFalsy();
        expect(component.littleMoreForm.get(['description']).valid).toBeFalsy();
        expect(component.littleMoreForm.get(['validate']).valid).toBeTruthy();
    });
});


// test switching between form and info
