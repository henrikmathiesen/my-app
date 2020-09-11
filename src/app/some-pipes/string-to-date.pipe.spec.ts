import { StringToDatePipe } from './string-to-date.pipe';

describe('StringToDatePipe', () => {

    let stringToDatePipe: StringToDatePipe;

    beforeEach(() => {
        stringToDatePipe = new StringToDatePipe();
    });

    describe('transform', () => {
        describe('Should accept both with and without hyphens', () => {
            it('should test 1', () => {
                const d = '20201224';
                const r = stringToDatePipe.transform(d);

                const year = r.getFullYear();
                const month = r.getMonth();
                const day = r.getDate();

                expect(year).toBe(2020);
                expect(month).toBe(11);         // december, zero index based
                expect(day).toBe(24);
            });

            it('should test 2', () => {
                const d = '2020-12-24';
                const r = stringToDatePipe.transform(d);

                const year = r.getFullYear();
                const month = r.getMonth();
                const day = r.getDate();

                expect(year).toBe(2020);
                expect(month).toBe(11);         // december, zero index based
                expect(day).toBe(24);
            });

            it('should test 3', () => {
                const d = '2020-12-01';
                const r = stringToDatePipe.transform(d);

                const year = r.getFullYear();
                const month = r.getMonth();
                const day = r.getDate();

                expect(year).toBe(2020);
                expect(month).toBe(11);         // december, zero index based
                expect(day).toBe(1);
            });
        });
    });

    describe('transformToo', () => { 
        it('should test 1', () => {
            const d = '20201224';
            const r = stringToDatePipe.transformToo(d);

            const year = r.getFullYear();
            const month = r.getMonth();
            const day = r.getDate();

            expect(year).toBe(2020);
            expect(month).toBe(11);             // december, zero index based
            expect(day).toBe(24);
        });

        it('should test 2', () => {
            const d = '2020-12-24';
            const r = stringToDatePipe.transformToo(d);

            const year = r.getFullYear();
            const month = r.getMonth();
            const day = r.getDate();

            expect(year).toBe(2020);
            expect(month).toBe(11);             // december, zero index based
            expect(day).toBe(24);
        });

        it('should test 3', () => {
            const d = '2020-12-01';
            const r = stringToDatePipe.transformToo(d);

            const year = r.getFullYear();
            const month = r.getMonth();
            const day = r.getDate();

            expect(year).toBe(2020);
            expect(month).toBe(11);             // december, zero index based
            expect(day).toBe(1);
        });
    });




});
