'use strict';

angular.module('spotifyAngularApp').factory('Controlls', function ($http) {
	return {
		play: function() {
			return $http.get('play');
		},
		pause: function(){
			return $http.get('pause');
		},
		ip: function(){
			return $http.get('ip');
		},
		next: function(){
			return $http.get('next');
		},
		prev: function(){
			return $http.get('prev');
		},
		getCurrent: function(){
			return $http.get('currSong');
		},
		volDown: function(){
			return $http.get('volDown');
		},
		volUp: function(){
			return $http.get('volUp');
		}
	};
});