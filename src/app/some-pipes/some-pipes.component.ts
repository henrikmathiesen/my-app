import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-some-pipes',
  templateUrl: './some-pipes.component.html',
  styleUrls: ['./some-pipes.component.scss']
})
export class SomePipesComponent implements OnInit {

  constructor() { }

  obj: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  vacation = new Date('2018-07-01T06:00:00+00:00');
  someDate = new Date(2019, 0, 10, 8, 0);

  ngOnInit() {
  }

}
