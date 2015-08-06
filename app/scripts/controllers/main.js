'use strict';

/**
 * @ngdoc function
 * @name spotifyAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spotifyAngularApp
 */
angular.module('spotifyAngularApp')
.controller('MainCtrl',['$scope', '$location', '$rootScope', '$routeParams', function ($scope, $location, $rootScope, $routeParams) {
	$scope.name = 'hehe';
	console.log($scope);
}]);



   
