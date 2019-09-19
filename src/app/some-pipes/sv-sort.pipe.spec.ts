import { SvSortPipe } from './sv-sort.pipe';

describe('SvSortPipe', () => {

    let svSortPipe: SvSortPipe;
    let simpleArray: string[];
    let complexArray: any[];

    beforeEach(() => {
        svSortPipe = new SvSortPipe();
        simpleArray = ['Bosse', 'Älg', 'Åke', 'Axam'];
        complexArray = [
            {
                name: 'Bosse'
            },
            {
                name: 'Älg'
            },
            {
                name: 'Åke'
            },
            {
                name: 'Axam'
            }
        ];
    });

    describe('sorting simple array', () => {
        it('should sort', () => {
            const expected = ['Axam', 'Bosse', 'Åke', 'Älg'];
            const result = svSortPipe.transform(simpleArray);

            expect(expected).toEqual(result);
        });
    });

    describe('sorting complex array', () => {
        it('should sort', () => {
            const result = svSortPipe.transform(complexArray, 'name');

            expect(result[0].name).toEqual('Axam');
            expect(result[1].name).toEqual('Bosse');
            expect(result[2].name).toEqual('Åke');
            expect(result[3].name).toEqual('Älg');
        });
    });

    describe('put item first, simple array', () => {
        it('should sort', () => {
            const expected = ['Älg', 'Axam', 'Bosse', 'Åke'];
            const result = svSortPipe.transform(simpleArray, null, 'Älg');

            expect(expected).toEqual(result);
        });
    });

    describe('put item first, complex array', () => {
        it('should sort', () => {
            const result = svSortPipe.transform(complexArray, 'name', 'Älg');

            expect(result[0].name).toEqual('Älg');
            expect(result[1].name).toEqual('Axam');
            expect(result[2].name).toEqual('Bosse');
            expect(result[3].name).toEqual('Åke');
        });
    });

});
