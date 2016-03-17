/**
 * Created by Administrator on 2016/3/8.
 */
;(function(define){
    define(['angular', 'uiRouter'],function(angular, uiRouter){
        var app = angular.module('app',['ui.router']);
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
                                    if($scope.id == 1){
                                        $scope.src="a.jpg";
                                    } else {
                                        $scope.src="b.jpg";
                                    }

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
                    }
                });

        }]);
    });
}(define));
