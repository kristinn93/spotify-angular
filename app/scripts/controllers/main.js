'use strict';

/**
 * @ngdoc function
 * @name spotifyAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spotifyAngularApp
 */
angular.module('spotifyAngularApp')
.controller('MainCtrl',['$scope', '$location', '$rootScope', '$routeParams' , 'Controlls' , 'URL', function ($scope, $location, $rootScope, $routeParams, Controlls, URL) {
	$scope.name = 'Press Ip Button to get Ip Addr of server';
	$scope.setIp = function(){
		URL = 'http://';
		URL += $scope.myIp;
		URL += ':';
		URL += $scope.myPort;
		URL += '/';
		console.log('The url is : ' + URL);
	};
	$scope.getIp = function() {
		Controlls.ip().success(function(data){
			$scope.name = 'http://' + data.ip + ':' + data.port;
		}).error(function(error){
			console.log('ip error ' + error);
		});
	};
	$scope.play = function (){
		Controlls.play().success(function() {
			console.log('Play success');
		}).error(function(error){
			console.log('Play error' + error);
		});
	};
	$scope.pause = function (){
		Controlls.pause().success(function() {
			console.log('Pause success');
		}).error(function(error){
			console.log('Pause error' + error);
		});
	};
	$scope.getUrl = function()
	{
		$scope.name = URL;
	};
	$scope.next = function()
	{
		Controlls.next().success(function() {
			console.log('next success');
		}).error(function(error){
			console.log('next error' + error);
		});
	};
}]);



   
