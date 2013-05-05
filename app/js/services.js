'use strict';

var myAppServices = angular.module('myApp.services', ['ngResource']);

/* myApp Services */

myAppServices.factory('TwitterService', function($resource){
    return $resource('http://search.twitter.com/:action',
        { action : 'search.json', q : '@g1', callback : 'JSON_CALLBACK'},
        { get : {method : 'JSONP'}
    });
});

myAppServices.factory('ClimaTempoService', function($resource){
    return $resource('http://cep.s1mp.net/:cep', {}, {
        get : {method : 'JSONP', params: {cep: ':cep', callback : 'JSON_CALLBACK'}, isArray : false}
    });
});
