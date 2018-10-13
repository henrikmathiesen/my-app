import { Pipe, PipeTransform } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Pipe({ name: 'dateObjToNgbDate' })
export class DateObjToNgbDatePipe implements PipeTransform {

    transform(value: Date): NgbDateStruct {
        if (!value) {
            return null;
        }

        const year = value.getFullYear();
        const month = (value.getMonth() + 1);
        const day = value.getDate();

        return {
            year, month, day
        };
    }
}
