// But remember moment.js

export class ParsableDateChecker {

    static isValidDateString(value: string): boolean {

        // yyyy-MM-dd or yyyyMMdd
        // OBS
        // Use regex to check against the above pattern (see regular-expressions > basics-04.test.js)
        // else value could be yyyyMM-dd or yyyy-MMdd for example
        // then this method would remove the dashes (in this scope), check Is reasonable date and say OK

        /* 
        
            This should do it (from regular-expressions > basics-04.test.js)
        
            const validateDate = value => {
                const pattern01 = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/;      // yyyy-MM-dd
                const pattern02 = /^\d{4}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/;        // yyyyMMdd

                const isValidPattern = pattern01.test(value) || pattern02.test(value);

                if (isValidPattern === false) {
                    return false;
                }

                // Is reasonable date

                const noDashes = value.replace(/-/g, '');

                const yearPart = noDashes.slice(0, 4);
                const monthPart = noDashes.slice(4, 6);
                const dayPart = noDashes.slice(6, 8);

                const dateObj = new Date(`${yearPart}-${monthPart}-${dayPart}`);

                return dateObj.getFullYear() === +yearPart &&
                    (dateObj.getMonth() + 1) === +monthPart &&
                    dateObj.getDate() === +dayPart;
            };
        
        */

        const noDashes = value.replace(/-/g, '');

        const isNumbers = /^[0-9]*$/.test(noDashes);

        if (!isNumbers) {
            return false;
        }

        const isCorrectLength = noDashes.length === 8;

        if (!isCorrectLength) {
            return false;
        }

        // Is reasonable date

        const yearPart = noDashes.slice(0, 4);
        const monthPart = noDashes.slice(4, 6);
        const dayPart = noDashes.slice(6, 8);

        const dateObj = new Date(`${yearPart}-${monthPart}-${dayPart}`);

        return dateObj.getFullYear() === +yearPart &&
            (dateObj.getMonth() + 1) === +monthPart &&
            dateObj.getDate() === +dayPart;
    }

    static isDate(date: any): boolean {
        if (date instanceof Date && !isNaN(date.getTime())) {
            return true;
        }

        return false;
    }

}
