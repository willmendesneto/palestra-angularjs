'use strict';

/* myApp Module */

angular.module('myApp', ['myApp.directives', 'myApp.services']).
  //config(['$routeProvider', function($routeProvider) {
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $locationProvider.hashPrefix('!');

  $routeProvider.
      when('/index', {templateUrl: '/angular-palestra/app/partials/snippet.html',   controller: 'SnippetCtrl'}).
      when('/resource', {templateUrl: '/angular-palestra/app/partials/help.html',   controller: 'TwitterCtrl'}).
      when('/directive-component', {templateUrl: '/angular-palestra/app/partials/directives.html',   controller: 'BeerCounter'}).
      when('/directives', {templateUrl: '/angular-palestra/app/partials/about.html'}).
      otherwise({redirectTo: '/index'});
}]);



