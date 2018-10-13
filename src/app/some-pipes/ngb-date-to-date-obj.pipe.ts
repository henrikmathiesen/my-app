import { Pipe, PipeTransform } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Pipe({ name: 'ngbDateToDateObj' })
export class NgbDateToDateObjPipe implements PipeTransform {

    transform(value: NgbDateStruct): Date {
        if (!value) {
            return null;
        }

        const year = value.year;
        const month = (value.month - 1);
        const day = value.day;

        return new Date(year, month, day);
    }

}
