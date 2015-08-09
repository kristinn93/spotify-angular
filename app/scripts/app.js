'use strict';

/**
 * @ngdoc overview
 * @name spotifyAngularApp
 * @description
 * # spotifyAngularApp
 *
 * Main module of the application.
 */
angular
  .module('spotifyAngularApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
angular.module('spotifyAngularApp').value('URL', 'http://localhost:8001/');