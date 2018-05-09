import { Injectable } from '@angular/core';

@Injectable()
export class UnitTestShallowParentService {

  constructor() { }

  foo() {
    return 'parent bar';
  }

}
