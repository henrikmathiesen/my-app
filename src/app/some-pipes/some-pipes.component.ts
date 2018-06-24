import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { parseNumber, formatNumber } from 'libphonenumber-js';
import { TruncateWordsPipe } from './truncate-words.pipe';

@Component({
  selector: 'my-some-pipes',
  templateUrl: './some-pipes.component.html'
})
export class SomePipesComponent implements OnInit {

  constructor(
    private upperCasePipe: UpperCasePipe,
    private truncateWordsPipe: TruncateWordsPipe
  ) { }

  obj: Object = { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };
  vacation = new Date('2018-07-01T06:00:00+00:00');
  someDate = new Date(2019, 0, 10, 8, 0);
  salary = 25000;

  ngOnInit() {
    // this.truncateWords();
    // this.uppercaseWords();
    this.formatPhones();
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

  private formatPhones() {
    const se = 'SE';
    const international = 'International';

    const sthlm01 = '08-123 45 678';
    const sthlm01Parsed = parseNumber(sthlm01, se);

    const sthlm02 = '0812345678';
    const sthlm02Parsed = parseNumber(sthlm02, se);

    const sthlm03 = '08 123 45 678';
    const sthlm03Parsed = parseNumber(sthlm03, se);

    const sthlm04 = '+46 8 123 456 78';
    const sthlm04Parsed = parseNumber(sthlm04);

    const na = '123 45 678';
    const naParsed = parseNumber(na, se);

    const mobile = '070 123 45 67';
    const mobileParsed = parseNumber(mobile, se);

    // It needs country code as parameter or as prefix on the phone string
    // else it can not decide which country the phone belongs to

    console.log(sthlm01Parsed, sthlm02Parsed, sthlm03Parsed, sthlm04Parsed, naParsed, mobileParsed);

    const sthlm01Formated = formatNumber(sthlm01Parsed, international);
    const sthlm02Formated = formatNumber(sthlm02Parsed, international);
    const sthlm03Formated = formatNumber(sthlm03Parsed, international);
    const sthlm04Formated = formatNumber(sthlm04Parsed, international);
    const naFormated = formatNumber(naParsed, international);
    const mobileFormated = formatNumber(mobileParsed, international);

    // It seems SE is not valid as second argument. We use International.

    console.log(`
        ${sthlm01Formated}
        ${sthlm02Formated}
        ${sthlm03Formated}
        ${sthlm04Formated}
        ${naFormated}
        ${mobileFormated}
      `);

  }

}
