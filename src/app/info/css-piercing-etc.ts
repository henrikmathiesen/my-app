/* tslint:disable */

/* 

    https://angular.io/guide/component-styles

    :host           // target styles in the element that hosts the component (the parent component)
    :host-context   // apply styles based on some condition outside of a component's view



    Target child component with CSS

        The shadow-piercing descendant combinator is deprecated and support is being removed from major browsers and tools. 
        As such we plan to drop support in Angular (for all 3 of /deep/, >>> and ::ng-deep). 
        Until then ::ng-deep should be preferred for a broader compatibility with the tools.            <=================
        Any style with ::ng-deep applied becomes a global style                                         <=================
            - Use the :host selector before ::ng-deep, to scope it to parent -> child -> child



        Another option (simpler, I think, also ::ng-deep is about to be deprecated):
            - parent component.ts
                @Component({
                    templateUrl: '',
                    styleUrls: [''],
                    encapsulation: ViewEncapsulation.None       // styles WILL be global                 <=================
                })
            - parent component.html
                <div id="unique-id">                            // scope it manually                     <=================
                    <child-component></child-component>
                    <h2>Some header</h2>
                </div>
            - parent component.scss
                #unique-id .selector-in-child-component { color: #fff }
                #unique-id h2 { color: blue }

*/
