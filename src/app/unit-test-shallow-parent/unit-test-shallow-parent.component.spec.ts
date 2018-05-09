import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestShallowParentComponent } from './unit-test-shallow-parent.component';

describe('UnitTestShallowParentComponent', () => {
  let component: UnitTestShallowParentComponent;
  let fixture: ComponentFixture<UnitTestShallowParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitTestShallowParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTestShallowParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
