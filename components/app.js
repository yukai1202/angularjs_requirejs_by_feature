/*app.js*/

;(function(define){
    define(['angular', './route'],function(angular, route){
        var app = angular.module('app');
        require(['./config'],function(index){
            require(index,function(){
                angular.bootstrap(document, ['app']);
            });
        });
        return app;
    });
}(define));
