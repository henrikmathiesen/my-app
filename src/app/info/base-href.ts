/* tslint:disable */

/*
    There are: 
        - baseHref 
            - Will change  <base href="/my-app/"> in index.html
            - Will change background-image:url(/my-app/assets/cat.jpg);
                - OBS Angular 8: https://github.com/angular/angular-cli/issues/14587
            - Will NOT change paths to css and js in index.html
            - https://shekhargulati.com/2017/07/06/angular-4-use-of-base-href-and-deploy-url-build-options/
        - deploy-url 
            - Will change paths to css and js in index.html
            - Will change paths to lazy loaded module scripts
            - https://shekhargulati.com/2017/07/06/angular-4-use-of-base-href-and-deploy-url-build-options/
        - output-path
            - name of folder for output (default dist)

    https://angular.io/cli/build

    - Arguments to ng build
        --baseHref baseHref
        --deployUrl deployUrl
        --output-path path

        example: https://angular.io/guide/deployment#deploy-to-github-pages

    "In most cases base-href is enough."
        - https://stackoverflow.com/questions/51182322/whats-the-difference-between-base-href-and-deploy-url-parameters-of-angular

*/
