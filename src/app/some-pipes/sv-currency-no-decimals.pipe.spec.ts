import { TestBed } from '@angular/core/testing';
import { LOCALE_ID } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { SvCurrencyNoDecimals } from './sv-currency-no-decimals.pipe';

describe('sv-currency-no-decimals.pipe', () => {

    let svCurrencyNoDecimals: SvCurrencyNoDecimals;
    let currencyPipe: CurrencyPipe;
    const nbs = '\xa0';

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CurrencyPipe,
                { provide: LOCALE_ID, useValue: 'sv' }, // see also test.ts
            ]
        });

        currencyPipe = TestBed.get(CurrencyPipe);
        svCurrencyNoDecimals = new SvCurrencyNoDecimals(currencyPipe);
    });

    it('test 1', () => {
        const value = svCurrencyNoDecimals.transform(25000);
        const expected = `25${nbs}000${nbs}kr`;
        expect(value).toEqual(expected);
    });

    it('test 2', () => {
        const value = svCurrencyNoDecimals.transform(250000);
        const expected = `250${nbs}000${nbs}kr`;
        expect(value).toEqual(expected);
    });

    it('test 3', () => {
        const value = svCurrencyNoDecimals.transform(250000.99);
        const expected = `250${nbs}001${nbs}kr`;
        expect(value).toEqual(expected);
    });
});
