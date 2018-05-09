import { Component, OnInit } from '@angular/core';
import { UnitTestShallowChildService } from './unit-test-shallow-child.service';

@Component({
  selector: 'my-unit-test-shallow-child',
  templateUrl: './unit-test-shallow-child.component.html',
  styleUrls: ['./unit-test-shallow-child.component.scss']
})
export class UnitTestShallowChildComponent implements OnInit {

  constructor(
    private unitTestShallowChildService: UnitTestShallowChildService
  ) { }

  ngOnInit() {
    console.log(
      this.unitTestShallowChildService.foo()
    );
  }

}
