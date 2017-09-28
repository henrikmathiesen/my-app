// TODO, do more

import { Hero } from '../shared/hero';

describe('dashboard.component', () => {
    describe('slice', () => { 
        it('returns a section of an array, leaving the original array untouched', () => {
            const heros: Hero[] = [
                {
                    id: 1,
                    name: 'Adam'
                },
                {
                    id: 2,
                    name: 'Bertil'
                },
                {
                    id: 3,
                    name: 'Ceasar'
                },
                {
                    id: 4,
                    name: 'David'
                },
                {
                    id: 5,
                    name: 'Erik'
                },
                {
                    id: 6,
                    name: 'Fredrik'
                },
                {
                    id: 7,
                    name: 'Gustav'
                }
            ];

            const slicedArray01 = heros.slice(0,5); // slice index 0-4
            
            expect(slicedArray01.length).toEqual(5);
            expect(slicedArray01.shift().id).toEqual(1);
            expect(slicedArray01.pop().id).toEqual(5);
            expect(heros.length).toEqual(7);
        });
    });
});
