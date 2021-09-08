/* tslint:disable */

/* 

    See also javascript-the-important-parts > other > order-search-result


    // # 1
    // Ranks whole words heigher
    
    const weightWord = (phrase: string, query: string) => {
        const phraseLowerCase = phrase.toLowerCase();

        if (phraseLowerCase.indexOf(query) === 0) {
            return 0;
        }

        const words = phraseLowerCase.split(/\/| /);

        let wordIndex = words.length;
        let letterIndex = phraseLowerCase.length;

        words.forEach((word: string, i: number) => {
            const index = word.indexOf(query);

            if (index > -1 && index < letterIndex) {
                letterIndex = index;
                wordIndex = i;
            }
        });

        return 1 + wordIndex + letterIndex * 100;
    };

    const sortOnMatch = (query: string, a: any, b: any) => {
        const wA = weightWord(a.namn, query);
        const wB = weightWord(b.namn, query);

        if (wA > wB) {
            return 1;
        } else if (wA === wB && a.namn > b.namn) {
            return 1;
        } else {
            return -1;
        }
    }

    // remove query argument from sortOnMatch, could be a variable in an encapsulating function
    return matches.sort(sortOnMatch);



    // # 2A
    // Ranks match earliest in phrase heigher
    // Ok, but no secondare sorting
    function searchSomething(query: string, allSomething: any[]): any[] {

        const termIsTooShort = query.length < 2;

        if (termIsTooShort) {
            return [];
        }

        const queryLowerCase = query.toLowerCase();

        const getOccurrence = (s: string) => {
            const position = s.toLowerCase().indexOf(queryLowerCase);
            return position < 0 ? 1000 : position;
        };

        const matches = allSomething.filter((something) => {
            return something.namn.toLowerCase().indexOf(queryLowerCase) > -1;
        });

        return matches.sort((a: any, b: any) => {
            return getOccurrence(a.namn) - getOccurrence(b.namn);
        });
    }



    // # 2B
    // Same as above but with secodary alphabetical sorting
    function getOccurrence(i) {
        let p = i.toLowerCase().indexOf(query.toLowerCase());
        let n = p < 0 ? 899 : p;
        let s = i.toLowerCase().substring(0, n);
        let r = '' + (1000 + n) + '' + s + '';
        return r;
    };

    matches.sort((a, b) => (getOccurrence(a)).localeCompare(getOccurrence(b), "sv", { sensitivity: 'case' }));


*/
