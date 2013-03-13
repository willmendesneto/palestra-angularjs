'use strict';

var myAppServices = angular.module('myApp.services', ['ngResource']);

/* myApp Services */
myAppServices.factory('SnippetService', function($resource){
		return $resource('phones/:phoneId.json', {}, {
			query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
		});
	});
