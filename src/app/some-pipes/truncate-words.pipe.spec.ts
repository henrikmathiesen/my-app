import { TruncateWordsPipe } from './truncate-words.pipe';

describe('truncate-words.pipe', () => {

    let truncateWordsPipe: TruncateWordsPipe;

    beforeEach(() => {
        truncateWordsPipe = new TruncateWordsPipe();
    });

    describe('common cases', () => {

        let words;

        beforeEach(() => {
            words = 'Lorem ipsum dolores es sita met. Flygande mockasiner.';
        });

        it('should truncate to words defined by cap, 1', () => {
            const cap = 3;

            const expected = 'Lorem ipsum dolores...';
            const actual = truncateWordsPipe.transform(words, cap);
            expect(expected).toEqual(actual);
        });

        it('should truncate to words defined by cap, 2', () => {
            const cap = 1;

            const expected = 'Lorem...';
            const actual = truncateWordsPipe.transform(words, cap);
            expect(expected).toEqual(actual);
        });

        it('removes any delimiter characters, so the 3 dots at the end appear natural', () => {
            const cap = 6;

            const expected = 'Lorem ipsum dolores es sita met...';
            const actual = truncateWordsPipe.transform(words, cap);
            expect(expected).toEqual(actual);
        });

    });

    describe('edge cases', () => {
        it('does not truncate if cap is less than 1', () => {
            const words = 'Lorem ipsum dolores.';
            const cap = 0;

            const expected = words;
            const actual = truncateWordsPipe.transform(words, cap);
            expect(expected).toEqual(actual);
        });

        it('does not truncate if word length is less or equal to cap', () => {
            const words = 'Lorem ipsum dolores.';
            const cap = 3;

            const expected = words;
            const actual = truncateWordsPipe.transform(words, cap);
            expect(expected).toEqual(actual);
        });
    });

});
