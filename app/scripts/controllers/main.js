'use strict';

/**
 * @ngdoc function
 * @name spotifyAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spotifyAngularApp
 */
angular.module('spotifyAngularApp')
.controller('MainCtrl',['$scope', '$location', '$rootScope', '$routeParams' , 'Controlls' , 'URL' , function ($scope, $location, $rootScope, $routeParams, Controlls, URL) {
	$scope.name = 'Press Ip Button to get Ip Addr of server';
	$scope.songObj;
	$scope.hostButton = 'Press If u are the host';
	$scope.playBtn = 'btn btn-primary';
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
			$scope.hostButton = 'http://' + data.ip + ':' + data.port;
		}).error(function(error){
			$scope.hostButton = 'Error getting host info';
			console.log('ip error ' + error);
		});
	};
	$scope.play = function (){
		$scope.playBtn = 'btn btn-primary jelly';
		Controlls.play().success(function() {
			console.log('Play success');
		}).error(function(error){
			console.log('Play error' + error);
		});
		setTimeout(function(){
			$scope.playBtn = 'btn btn-primary';
		}, 500);
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
	$scope.prev = function()
	{
		Controlls.prev().success(function() {
			console.log('Prev success');
		}).error(function(error){
			console.log('Prev error' + error);
		});
	};
	setInterval(function(){
		Controlls.getCurrent().success(function(song){
			if($scope.songObj !== song){
				$scope.songObj = song;
				$scope.name = song.song;
				$scope.name += ' / ' + song.artist;
			}
		}).error(function(error){
			console.log('error getting current song' + error);
		});
	},5000)

}]);



   
