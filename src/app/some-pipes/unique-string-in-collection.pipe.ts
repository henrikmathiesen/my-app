import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appUniqueStringInCollection' })
export class UniqueStringInCollectionPipe implements PipeTransform {

    transform(value: string[]) {
        if (!value) {
            return value;
        }

        const onlyUnique = (v, index, self) => self.indexOf(v) === index;
        return value.filter(onlyUnique);
    }

}
