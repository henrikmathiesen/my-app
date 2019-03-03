import { UniqueInObjCollectionPipe } from './unique-in-obj-collection.pipe';

describe('UniqueInObjCollectionPipe', () => {

    let pipe: UniqueInObjCollectionPipe;

    beforeEach(() => {
        pipe = new UniqueInObjCollectionPipe();
    });

    describe('it should filter array so only unique objects are left, based properties to filter by', () => {

        describe('one decider', () => {

            let objArr = [];

            beforeEach(() => {
                objArr = [
                    {
                        name: 'Adam',
                        age: 20
                    },
                    {
                        name: 'adam',
                        age: 20
                    },
                    {
                        name: 'Bertil',
                        age: 20
                    },
                    {
                        name: 'Adam',
                        age: 20
                    }
                ]
            });

            it('should test - 1', () => {
                const result = pipe.transform(objArr, 'name');
                const expected = [
                    {
                        name: 'Adam',
                        age: 20
                    },
                    {
                        name: 'adam',
                        age: 20
                    },
                    {
                        name: 'Bertil',
                        age: 20
                    }
                ];

                expect(result).toEqual(expected);
            });

            it('should test - 2', () => {
                const result = pipe.transform(objArr, 'age');
                const expected = [
                    {
                        name: 'Adam',
                        age: 20
                    }
                ];

                expect(result).toEqual(expected);
            });
        });

        describe('two deciders', () => {

            let objArr = [];

            beforeEach(() => {
                objArr = [
                    {
                        city: 'Gothenburg',
                        address: 'Gotgatan'
                    },
                    {
                        city: 'Stockholm',
                        address: 'Gotgatan'
                    },
                    {
                        city: 'Gothenburg',
                        address: 'Gotgatan'
                    }
                ]
            });

            it('should test - 1', () => {
                const result = pipe.transform(objArr, 'city', 'address');
                const expected = [
                    {
                        city: 'Gothenburg',
                        address: 'Gotgatan'
                    },
                    {
                        city: 'Stockholm',
                        address: 'Gotgatan'
                    },
                ];

                expect(result).toEqual(expected);
            });
        });

    });

});
