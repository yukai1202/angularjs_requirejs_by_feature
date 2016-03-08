'use strict';

define(['angular'],function(angular){
     return angular.module('app').controller('navController', ['$scope', function($scope){
        $scope.title="app page";
    }]);

});