/* 

    A prepping for a paginator that
        - has buttons for each page
        - when a button is clicked: fires an event sending the button nr to a method
        - method can then index into the parent array and show that set of items
            paginationNrClicked(nr) {
                this.setToShow = this.sets[nr - 1];
            }


    describe('pagination testing', () => {

        let createPaginationCollection;

        beforeEach(() => {
            createPaginationCollection = (arenden) => {
                const paginationDefaultItemsPerPage = 10;
                const nrOfArenden = arenden.length;
                const nrOfPages = Math.ceil(nrOfArenden / paginationDefaultItemsPerPage);

                const sets = [];

                for (let i = 0; i < nrOfPages; i++) {
                    const start = i * paginationDefaultItemsPerPage;
                    const end = (i + 1) * paginationDefaultItemsPerPage;

                    sets.push(arenden.slice(start, end));
                }

                return sets;
            };
        });

        it('1', () => {

            const arenden = [
                { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 },
                { id: 11 }, { id: 12 }, { id: 13 }, { id: 14 }, { id: 15 }, { id: 16 }, { id: 17 }, { id: 18 }, { id: 19 }, { id: 20 },
            ];

            const sets = createPaginationCollection(arenden);

            expect(sets.length).toBe(2);

            const set1FirstItem = sets[0][0];
            const set1LastItem = sets[0][sets[0].length - 1];

            const set2FirstItem = sets[1][0];
            const set2LastItem = sets[1][sets[1].length - 1];

            expect(set1FirstItem.id).toBe(1);
            expect(set1LastItem.id).toBe(10);

            expect(set2FirstItem.id).toBe(11);
            expect(set2LastItem.id).toBe(20);
        });

    

    });



*/
