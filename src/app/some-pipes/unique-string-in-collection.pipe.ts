import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appUniqueStringInCollection' })
export class UniqueStringInCollectionPipe implements PipeTransform {

    transform(value: string[]) {
        const onlyUnique = (value, index, self) => self.indexOf(value) === index;
        return value.filter(onlyUnique);
    }

}