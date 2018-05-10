import { Component, OnInit } from '@angular/core';
import { UnitTestShallowParentService } from './unit-test-shallow-parent.service';

@Component({
  templateUrl: './unit-test-shallow-parent.component.html'
})
export class UnitTestShallowParentComponent implements OnInit {

  constructor(
    private unitTestShallowParentService: UnitTestShallowParentService
  ) { }

  ngOnInit() {
    console.log(
      '# ' + this.unitTestShallowParentService.foo()
    );
  }

}
