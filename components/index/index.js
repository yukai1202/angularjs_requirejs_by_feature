'use strict';

define(['angular'],function(angular){
     return angular.module('app').controller('indexController', ['$scope', function($scope){
        $scope.title="index page";
    }]);

});