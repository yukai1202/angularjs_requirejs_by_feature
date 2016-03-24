'use strict';

define(['angular'],function(angular){
    angular.module('app').registerController('dynamicController', ['$scope', function($scope){
        $scope.title="dynamic page-------------";
    }]);
});