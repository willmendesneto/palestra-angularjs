'use strict';

/* Directives */
var myAppDirectives = angular.module('myApp.directives', []);

/**
 * Directive for binding keyboard shortcuts.
 *
 * When a key press matches one of the key bindings, the associated expression is executed.
 */
myAppDirectives.directive('lorem', function(){
	return{
		restrict: 'E',
		template: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" +
				  "\ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
				  "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
				  "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
				  "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n" +
				  "proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}
});

myAppDirectives.directive('gallery', function(){
	return{
		restrict: 'E',
		template: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" +
				  "\ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
				  "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
				  "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
				  "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n" +
				  "proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}
});


myAppDirectives.directive('tabs', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: function($scope, $element) {
        var panes = $scope.panes = [];

        $scope.select = function(pane) {
          angular.forEach(panes, function(pane) {
            pane.selected = false;
          });
          pane.selected = true;
        }

        this.addPane = function(pane) {
          if (panes.length == 0) $scope.select(pane);
          panes.push(pane);
        }
      },
      template:
        '<div class="tabbable">' +
          '<ul class="nav nav-tabs">' +
            '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">'+
              '<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
            '</li>' +
          '</ul>' +
          '<div class="tab-content" ng-transclude></div>' +
        '</div>',
      replace: true
    };
  }).
  directive('pane', function() {
    return {
      require: '^tabs',
      restrict: 'E',
      transclude: true,
      scope: { title: '@' },
      link: function(scope, element, attrs, tabsCtrl) {
        tabsCtrl.addPane(scope);
      },
      template:
        '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
        '</div>',
      replace: true
    };
  });