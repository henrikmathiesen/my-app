import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { TruncateWordsPipe } from './truncate-words.pipe';

@Component({
  selector: 'my-some-pipes',
  templateUrl: './some-pipes.component.html',
  styleUrls: ['./some-pipes.component.scss']
})
export class SomePipesComponent implements OnInit {

  constructor(
    private upperCasePipe: UpperCasePipe,
    private truncateWordsPipe: TruncateWordsPipe
  ) { }

  obj: Object = { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };
  vacation = new Date('2018-07-01T06:00:00+00:00');
  someDate = new Date(2019, 0, 10, 8, 0);

  ngOnInit() {
    this.truncateWords();
    this.uppercaseWords();
  }

  private truncateWords() {
    let words = 'Lorem ipsum dolores es sitamet';
    words = this.truncateWordsPipe.transform(words, 3);
    console.log(words);
  }

  private uppercaseWords() {
    let words = 'Lorem ipsum';
    words = this.upperCasePipe.transform(words);
    console.log(words);
  }

}
