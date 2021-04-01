/* tslint:disable */

/* 

    Prefer not using functions in templates

        https://medium.com/showpad-engineering/why-you-should-never-use-function-calls-in-angular-template-expressions-e1a50f9c0496

    However Angular themselves use functions in templates

        getVal()
        https://angular.io/guide/template-syntax

    And Todd Motto does
    
        *ngIf="user.get('name').hasError('required') && user.get('name').touched"
        https://ultimatecourses.com/blog/angular-2-forms-reactive

*/
