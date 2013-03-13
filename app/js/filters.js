'use strict';

/* myApp Filters */
var myAppFilters = angular.module('myApp.filters', []);

myAppFilters.filter('formattedFullDate', function() {
  return function(d) {
    return d ? moment(d).format('MMMM Do YYYY, h:mm a') : '';
  };
});