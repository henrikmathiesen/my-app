import { Component } from '@angular/core';
import { AnotherSharedService } from './another-module-shared/services/another-shared.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor(
    private anotherSharedService: AnotherSharedService
  ){
    console.log('this.anotherSharedService.getSomething()', this.anotherSharedService.getSomething());
  }
}
