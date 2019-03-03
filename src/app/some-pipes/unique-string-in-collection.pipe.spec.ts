import { UniqueStringInCollectionPipe } from './unique-string-in-collection.pipe';

describe('UniqueStringInCollection', () => {

    let pipe: UniqueStringInCollectionPipe;

    beforeEach(() => {
        pipe = new UniqueStringInCollectionPipe();
    });

    describe('it should filter array so only unique strings are left', () => {

        it('should test 1', () => {
            const collection = ['Adam', 'Bertil', 'Adam'];
            const result = pipe.transform(collection);

            expect(result).toEqual(['Adam', 'Bertil']);
        });

        it('should test 2', () => {
            const collection = ['Adam', 'Adam', 'Bertil', 'Ceasar', 'Bertil', 'Adam', 'Bertil'];
            const result = pipe.transform(collection);

            expect(result).toEqual(['Adam', 'Bertil', 'Ceasar']);
        });

        it('should test 3', () => {
            const collection = ['Adam', 'Bertil', 'adam'];
            const result = pipe.transform(collection);

            expect(result).toEqual(['Adam', 'Bertil', 'adam']);
        });

    });
});
