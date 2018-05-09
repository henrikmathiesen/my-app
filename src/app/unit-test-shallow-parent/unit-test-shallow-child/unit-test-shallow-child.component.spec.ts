import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestShallowChildComponent } from './unit-test-shallow-child.component';
import { UnitTestShallowChildService } from './unit-test-shallow-child.service';

describe('UnitTestShallowChildComponent', () => {
  let component: UnitTestShallowChildComponent;
  let fixture: ComponentFixture<UnitTestShallowChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        UnitTestShallowChildComponent 
      ],
      providers: [
        UnitTestShallowChildService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTestShallowChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
