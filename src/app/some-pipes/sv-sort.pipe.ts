import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'svSort' })
export class SvSortPipe implements PipeTransform {

    transform(value: any[], sortByProperty: string = '', putFirst: string = '') {
        if (!value) {
            return value;
        }

        const arr = [...value];

        const sortFn = (a: string, b: string) => {
            a = a.toLowerCase();
            b = b.toLowerCase();

            return a.localeCompare(b, 'sv');
        };

        // sorting string array
        if (!sortByProperty) {
            if (putFirst) {
                const putFirstItem = arr.filter(item => item === putFirst)[0];
                const arrWithoutPutFirstItem = arr.filter(item => item !== putFirst);

                return [putFirstItem, ...arrWithoutPutFirstItem.sort()];
            } else {
                return arr.sort(sortFn);
            }
        }

        // sorting object array
        if (putFirst) {
            const putFirstItem = arr.filter(item => item[sortByProperty] === putFirst)[0];
            const arrWithoutPutFirstItem = arr.filter(item => item[sortByProperty] !== putFirst);

            return [
                putFirstItem,
                ...arrWithoutPutFirstItem.sort((a: any, b: any) => {
                    return sortFn(a[sortByProperty], b[sortByProperty]);
                })
            ];
        } else {
            return arr.sort((a: any, b: any) => {
                return sortFn(a[sortByProperty], b[sortByProperty]);
            });
        }

    }
}
