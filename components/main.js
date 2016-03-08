'use strict';
require.config({
    paths: {
        angular: '../bower_components/angular/angular.min',
        'uiRouter': '../bower_components/angular-ui-router/release/angular-ui-router.min'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        'uiRouter': {
            deps: ['angular']
        }
    }
});

require(['./app'],function(){

});
