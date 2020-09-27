/* tslint:disable */

/* 

    In Angular there is this concept of eagerly loaded modules (app.module, shared.module, some-feature.module) and lazy loaded modules (some-other-feature.module).

    A service or a pipe (if you want to use it in a ts file) can be provided in a module, a component, or as of Angular 6 have the @Injectable({providedIn: 'root'}) decorator (not pipes though).
    Depending of where you provide it, it gets registrered to an injector.


    Each Angular component gets their own injector, https://angular.io/guide/hierarchical-dependency-injection#elementinjector
    A service/pipe provided there is accessible only to the component and its child components.

    All eagerly loaded modules share the same injector, the root injector.
    A service/pipe provided in any eagerly loaded module will be registered to the root injector and will be an app wide singleton (accessible to eagerly and lazy loaded modules).
    A service with @Injectable({providedIn: 'root'}) decorator will be registered to the root injector, same as above, no need to provide it in a module.

    Each lazy loaded modules will have their own injector.
    A service/pipe provided in any lazy loaded module will be an unique instance to that modules context.

    https://app.pluralsight.com/guides/how-to-implement-services-and-dependency-injection-angular


    
    If you do not understand this it could lead to some confusion. For instance lets take an eagerly loaded module, login.module, and a lazy loaded module, products.module.
    You have a service, user.service, with a setUserIsLoggedIn(v: boolean) and getUserIsLoggedIn(): boolean method, and you provide that service in login.module and products.module.
    Then withing the context of all eagerly loaded modules there will be one instance of user.service, but within the lazy loaded products.module's context there will be another instance of user.service.
    So lets say, the user loggs in, you call userService.setUserIsLoggedIn(true), routing to products, and there you check userService.getUserIsLoggedIn(), well the method will return false/undefined (since it is another instance).


    Another example. You create a service that you think should be shared application wide as a singleton, so you provide it in shared.module.
    But then you import shared.module in an eagerly loaded module and in a lazy loaded module. The effect will be the same as above.
    https://angular-2-training-book.rangle.io/modules/shared-modules-di


    SERVICES, KEY TAKE AWAYS

        Application wide services should, as of Angular 6, have the @Injectable({providedIn: 'root'}) decorator, no need to provide them. Place the files in app/services.
        Application wide services should, in legazy Angular, be provided in an eagerly loaded core.module and imported in app.module only. Place the files in app/core/services folder.
        Services only relevant in a lazy loaded context should be provided in the lazy loaded module. Place files in app/lazy/services.
        Services only relevant in a eagerly loaded context should be provided in the eagerly loaded module -- but beware that the service will be registered with the root injector. Place files in app/eagerly/services.
        I dont really see a need to provide a service at the component level.

        There is some confusion about using @Injectable({providedIn: SomeModule}) . It would be the same as providing it in the providers array of eagerly / lazy modules(?)
            https://github.com/angular/angular-cli/issues/10170

    PIPES PROVIDE, KEY TAKE AWAYS
        
        Remember
            - Built in Angular pipes, like CurrencyPipe, do not need to be in module declerations[]
            - Custom pipes do need to be in module declerations[]
            - If a pipe is only used in a template, it does not need to be in module providers[]
            - If a pipe is used in a component.ts file, it does need to be in module providers[]

        
        I think custom pipes should be placed in shared folder and declared in shared.module
            declarations: [SomePipe]
            exports: [SomePipe]
        That way all eagerly loaded modules and lazy loaded modules can import shared.module and use the pipes in the template.

        But! Lets say we want to use SomePipe in a component.ts file, then we need to provide it, so we do that in providers[] in shared.module. The same is true for a build in pipe, we need to provide it somewhere.
        This however means that all the eagerly loaded modules will get one instance from the root injector while the lazy loaded modules will get their own instance from their own injector.
        Pipes are pure, meaning given the same input they give the same output, and they have no side effect and do not hold any state -- so the consequences should not be that bad.
        But I would still prefer that provided pipes would belong to the root injector.

        Sadly the @Injectable({providedIn: 'root'}) decorator is not available for pipes.
        https://github.com/angular/angular/issues/25943

        
        So, what to do?
            
            - We could provide the pipe in app.module, that way it would be added to the root injector and become an app wide singleton.
                - I would however prefer to have it provided in the shared module, where it is declared and exported

            - Another way is to use a static forRoot(): ModuleWithProviders in shared.module. See angular-x-routing.
                - Also recomended here https://angular-2-training-book.rangle.io/modules/shared-di-tree
                - This will register the pipe services with the root injector.
                - Also the exported components/pipes/directives in shared.module will be accessible in app.modules components.
                
                - Importing the shared.module in eagerly loaded module does not increase the bundle file size.

                - shared.module exports CommonModule , it then gets imported in app.module, which already imports BrowserModule that exports CommonModule
                    - Not a problem 
                        - https://angular.io/guide/ngmodule-faq#what-if-i-import-the-same-module-twice
                        - https://github.com/tomastrajan/angular-ngrx-material-starter/issues/47

*/
