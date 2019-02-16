import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({ name: 'svCurrencyNoDecimals' })
export class SvCurrencyNoDecimals implements PipeTransform {

    constructor(
        private currencyPipe: CurrencyPipe
    ) { }

    transform(value: number) {
        if (!value) {
            return value;
        }

        return this.currencyPipe.transform(value, 'kr', 'symbol', '1.0-0');
    }

}
