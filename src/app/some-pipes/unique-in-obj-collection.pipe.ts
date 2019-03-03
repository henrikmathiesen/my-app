import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appUniqueInObjCollection' })
export class UniqueInObjCollectionPipe implements PipeTransform {

    transform(value: any[], decider1: string, decider2 = '') {
        if (!value) {
            return value;
        }

        if (decider1 && decider2) {
            return value
                .filter((thing, index, self) =>
                    index === self.findIndex((t) => (
                        t[decider1] === thing[decider1] && t[decider2] === thing[decider2]
                    ))
                );
        }

        return value
            .filter((thing, index, self) =>
                index === self.findIndex((t) => (
                    t[decider1] === thing[decider1]
                ))
            );

    }

}
