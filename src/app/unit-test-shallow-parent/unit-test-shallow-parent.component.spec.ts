import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';                                           // B1
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestShallowParentService } from './unit-test-shallow-parent.service';
import { UnitTestShallowParentComponent } from './unit-test-shallow-parent.component';
import { UnitTestShallowChildComponent } from './unit-test-shallow-child/unit-test-shallow-child.component';        // A1

describe('UnitTestShallowParentComponent', () => {
  let component: UnitTestShallowParentComponent;
  let fixture: ComponentFixture<UnitTestShallowParentComponent>;

  /*
    This component renders a child component. If we try to run the test as is, it will be an error. To solve it we can either:
      - A1) Import the child component
      - A2) Place it in decleration
      --- BUT: this will force us to provide child components services. And I think sub sub component will put a toll on this test as well

      OR:
      - B1) Import the CUSTOM_ELEMENTS_SCHEMA
      - B2) Place it in schemas
      --- REMEMBER: do NOT declare child component if taking this approach

      C1) We do however need to provide this component services, if they are provided in the module (not if they are provided in the component)
  */

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        UnitTestShallowParentComponent,
        //UnitTestShallowChildComponent                                                                             // A2
      ],
      schemas: [                                                                                                    // B2
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        UnitTestShallowParentService                                                                                // C1
      ]
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
