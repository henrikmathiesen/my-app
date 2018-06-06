import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncateWords' })
export class TruncateWordsPipe implements PipeTransform {

    transform(value: string, cap: number): string {
        let words = value.split(' ');

        if (words.length <= cap || cap < 1) { 
            return value;
        }

        words = words.slice(0, cap);

        console.log(words);

        words[cap - 1] = words[cap - 1]
			.replace('.', '')
			.replace(',', '')
			.replace('!', '')
			.replace('?', '')
			.replace(':', '')
            .replace(';', '');
            
        return words.join(' ') + '...';
    }

}
