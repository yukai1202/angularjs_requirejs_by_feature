/**
 * Created by Administrator on 2016/3/8.
 */
;(function(define){
    define(['angular', 'uiRouter'],function(angular, uiRouter){
        var app = angular.module('app',['ui.router']);

        app.config(['$controllerProvider', function($controllerProvider){
            app.registerController = $controllerProvider.register;
        }]);

        app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state('home', {
                    url: "/",
                    views: {
                        'navbar': {
                            templateUrl: 'components/navbar/navbar.html',
                            controller: 'navController'
                        },
                        'content': {
                            templateUrl: 'components/home/home.html',
                            controller: 'homeController'
                        }
                    }
                })
                .state('home.detail',{
                    url: "home/:id",
                    views:{
                        '': {
                            templateUrl: 'components/home/home_detail.html',
                            controller: ['$scope', '$stateParams',
                                function ($scope, $stateParams) {
                                    $scope.id = $stateParams.id;
                                }]
                        }
                    }
                })
                .state('index', {
                    url: "/index",
                    views: {
                        'navbar': {
                            templateUrl: 'components/navbar/navbar.html',
                            controller: 'navController'
                        },
                        'content': {
                            templateUrl: 'components/index/index.html',
                            controller: 'indexController'
                        }
                    },
                    resolve: {
                        deps: function($q){
                            return "hello world";
                        }
                    }
                })
                .state('page',{
                    url: "/page",
                    
                    resolve: {
                        ctrlProvider: ['$q','$rootScope',function($q, $rootScope){
                            var defer = $q.defer();

                            require(['dynamic/dynamicCtr'], function(ctr){
                                defer.resolve();
                                
                            });

                            return defer.promise;
                        }]
                    },
                    views: {
                        'navbar': {
                            templateUrl: 'components/navbar/navbar.html',
                            controller: 'navController'
                        },
                        'content': {
                            templateUrl: 'components/dynamic/dynamic.html',
                            controller: 'dynamicController'
                        }
                    }
                });

        }]);
    });
}(define));
