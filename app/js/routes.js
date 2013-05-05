'use strict';

/* myApp Module */

angular.module('myApp', ['myApp.directives', 'myApp.services']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $locationProvider.hashPrefix('!');

  $routeProvider.
      when('/index', {templateUrl: '/palestra-angular/app/partials/snippet.html',   controller: 'SnippetCtrl'}).
      when('/directive-component', {templateUrl: '/palestra-angular/app/partials/directives.html',   controller: 'BeerCounter'}).
      when('/directives', {templateUrl: '/palestra-angular/app/partials/about.html'}).
      when('/resource', {templateUrl: '/palestra-angular/app/partials/climatempo.html',   controller: 'ClimaTempoCtrl'}).

      otherwise({redirectTo: '/index'});
}]);



