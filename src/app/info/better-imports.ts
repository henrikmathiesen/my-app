/* tslint:disable */

// # Imports with index.ts file

// index.ts file in folder 'models'
// export * from './adress.model';
// export * from './book.model';
// export * from './reader.model';

// some-other-file.ts
// import { AdressModel, BookModel, ReaderModel } from './models';


// # Import Shortcuts in tsconfig

// https://netbasal.com/sexier-imports-in-typescript-e3c645bdd3c6
// - See angular-x-routing
//      - tsconfig.json
//      - better-imports.component



/* 

    SIDE NOTE

    declare const require: any;
    const moment = require('moment');

    or

    import moment from 'moment';

    And using moment

    in 2 files

    does not increase file size (I didnt think it would)
    main 621KB -> 991KB (using moment in one file) = 370KB increase -> 991KB (using moment in second file) = 0KB increase

*/
