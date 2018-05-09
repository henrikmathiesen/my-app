import { Injectable } from '@angular/core';

@Injectable()
export class UnitTestShallowChildService {

  constructor() { }

  foo() {
    return 'child bar';
  }

}
