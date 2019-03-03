import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appUniqueStringInCollection' })
export class UniqueStringInCollectionPipe implements PipeTransform {

    transform(value: string[]) {
        if (!value) {
            return value;
        }

        const onlyUnique = (value, index, self) => self.indexOf(value) === index;
        return value.filter(onlyUnique);
    }

}
