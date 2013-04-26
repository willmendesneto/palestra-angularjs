'use strict';

var myAppServices = angular.module('myApp.services', ['ngResource']);

/* myApp Services */
myAppServices.factory('SnippetService', function($resource){
	return $resource('app/snippets/:snippet.json', {}, {
		get: {method:'GET', params:{snippet : 'snippets'}, isArray:true}
	});
});

myAppServices.factory('TwitterService', function($resource){
    return $resource('http://search.twitter.com/:action',
        { action : 'search.json', q : '@g1', callback : 'JSON_CALLBACK'},
        { get : {method : 'JSONP'}
    });
});