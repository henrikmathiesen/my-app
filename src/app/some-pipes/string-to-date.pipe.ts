import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'stringToDate' })
export class StringToDatePipe implements PipeTransform {

    // yyyy-MM-dd or yyyyMMdd
    // validate the string before sending it to this pipe

    /* 
        NOTE: Angular has a build in date pipe for Date to String
    */

    transform(value: string): Date {
        if (!value) {
            return null;
        }

        const noDashes = value.replace(/-/g, '');

        const yearPart = noDashes.slice(0, 4);
        const monthPart = noDashes.slice(4, 6);
        const dayPart = noDashes.slice(6, 8);

        const withHyphens = `${yearPart}-${monthPart}-${dayPart}`;          // simpler (check IE11...)
        return new Date(withHyphens);
    }

    transformToo(value: string): Date {
        if (!value) {
            return null;
        }

        const noDashes = value.replace(/-/g, '');

        const yearPart = noDashes.slice(0, 4);
        const monthPart = noDashes.slice(4, 6);
        const dayPart = noDashes.slice(6, 8);

        return new Date(+yearPart, (+monthPart - 1), +dayPart);             // another aproach
    }
}
