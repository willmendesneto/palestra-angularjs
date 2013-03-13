'use strict';

//	Controller Snippet
var SnippetCtrl = function ($scope){

	/**
	 * Variable for snippets editor
	 * @type {String}
	 */
	$scope.text = "<div class=\"index\">\n\tWelcome!\n</div>\n<lorem></lorem>";

	/**
	 * Initial value of form snippets
	 *
	 * @type {Array}
	 */
	$scope.snippet = [
		{text : '', done : false, tag: '', snippet: ''}
	];

	/**
	 * Initial snippets list
	 *
	 * @type {Array}
	 */
	$scope.snippets = [
		{ text : "Lorem Ipsum", done : false, tag: 'lorem', snippet: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\nquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\nconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\ncillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\nproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>" },
		{ text : "Galeria (slideshow)", done : false, tag: 'gallery', snippet: '<ul id="sliderInformativo" >\n\t<li>\n\t\t<a href="acessoainformacao" rel="external" target="_blank">\n\t\t\t<img src="http://www.camara.abaira.ba.io.org.br/arquivos_clientes/2/banner/147.jpg" width="582" height="215" alt="Novo Site" longdesc="Novo Site">\n\t\t</a>\n\t</li>\n</ul>' }
	];

	$scope.prettifyCodeSnippet = function(){
        $('.code-compiled').val($scope.text);
        prettyPrint();
        alert($('.code-compiled').val());
	};

	$scope.init = function(){
        this.compileTextWithSnippets($scope.text);
	};

	/**
	 * Get count of all snippets
	 * @return {int} [snippets length]
	 */
	$scope.getTotalSnippets = function(){
		return $scope.snippets.length;
	};

	/**
	 * Remove Snippets from actual snippets list
	 * @return {bool} Boolean value of return
	 */
	$scope.clearCompleted = function(){
		$scope.snippets = _.filter($scope.snippets, function(todo){
			return !todo.done;
		});
	};

	/**
	 * Compile the text in editor with the snippets inserteds
	 * @return {string} the text formated
	 */
	$scope.compileTextWithSnippets = function(text){
		var textWithSnippets = text;
		$($scope.snippets).each( function(i, data){
			textWithSnippets = textWithSnippets.replace('<' + data.tag + '></' + data.tag + '>', data.snippet);
		});
		$scope.text = textWithSnippets;
		$('.code-compiled').html(textWithSnippets);
		prettyPrint();
	}

	/**
	 * Add a snippets in $scope.snippets
	 */
	$scope.addSnippet = function(){
		$scope.snippets.push({ text : $scope.snippet.text, done : false, tag : $scope.snippet.tag, snippet : $scope.snippet.snippet});
		$scope.snippet.text = $scope.snippet.tag = $scope.snippet.snippet = '';
	};

	/**
	 * Editing a individual snippet
	 */
	$scope.editSnippet = function(item){
		$scope.snippet = item;
	};

	$scope.init();

};


//	Controller 	TWITTER
var TwitterCtrl = function ($scope, $resource){

	$scope.searchTerm = '@g1';

	$scope.twitter = $resource('http://search.twitter.com/:action',
		{ action : 'search.json', q : '@g1', callback : 'JSON_CALLBACK'},
		{ get : {method : 'JSONP'}}
		);

	$scope.doSearch = function(){
		$scope.twitterResult = $scope.twitter.get({ q : $scope.searchTerm });
	}

	$scope.twitterResult = $scope.twitter.get({ q : $scope.searchTerm });

};

function BeerCounter($scope, $locale) {
	$scope.beers = [0, 1, 2, 3, 4, 5, 6];
	if ($locale.id == 'en-us') {
		$scope.beerForms = {
			0: 'no beers',
			one: '{} beer',
			other: '{} beers'
		};
	} else {
		$scope.beerForms = {
			0: 'žiadne pivo',
			one: '{} pivo',
			few: '{} pivá',
			other: '{} pív'
		};
	}
};

/* Controllers */

var PhoneListCtrl = function($scope, Phone) {
	$scope.phones = Phone.query();
	$scope.orderProp = 'age';
};

var PhoneDetailCtrl = function ($scope, $routeParams, Phone) {
	$scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
		$scope.mainImageUrl = phone.images[0];
	});

	$scope.setImage = function(imageUrl) {
		$scope.mainImageUrl = imageUrl;
	};
};

/* myApp Controllers */

var AppCtrl = function($scope) {
	$scope.name = "John Smith";

	$scope.text = "<div class=\"index\">\n\tWelcome!\n</div>\n<lorem></lorem>";

};