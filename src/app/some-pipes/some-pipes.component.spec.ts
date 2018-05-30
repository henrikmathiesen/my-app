import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomePipesComponent } from './some-pipes.component';

describe('SomePipesComponent', () => {
  let component: SomePipesComponent;
  let fixture: ComponentFixture<SomePipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomePipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
