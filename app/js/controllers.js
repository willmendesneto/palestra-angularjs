'use strict';

//	Controller Snippet
var SnippetCtrl = function ($scope, $routeParams, SnippetService){

	/**
	 * Variable for snippets editor
	 * @type {String}
	 */
	$scope.text = "<h1>Welcome!</h1>\n\n<lorem></lorem>";

	/**
	 * Initial value of form snippets
	 *
	 * @type {Array}
	 */
	$scope.snippet = [
		{text : '', done : false, tag: '', snippet: ''}
	];

	/**
	 * Initial value of available languages
	 *
	 * @type {Array}
	 */
	$scope.arrayAvailableLanguages = [
		{name : 'php', id: 1},
		{name : 'html', id: 2}
	];

	/**
	 * Initial snippets list
	 *
	 * @type {Array}
	 */
	$scope.snippets = [
		{ text : "Lorem Ipsum", done : false, tag: 'lorem', snippet: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, eiusmod\ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim,\nquis nostrud exercitation ullamco laboris ex ea commodo est laborum.</p>" },
		{ text : "Galeria (slideshow)", done : false, tag: 'gallery', snippet: '<ul id="sliderInformativo" >\n\t<li>\n\t\t<a href="acessoainformacao" rel="external" target="_blank">\n\t\t\t<img src="http://www.camara.abaira.ba.io.org.br/arquivos_clientes/2/banner/147.jpg" width="582" height="215" alt="Novo Site" longdesc="Novo Site">\n\t\t</a>\n\t</li>\n</ul>' }
	];

	$scope.init = function(){
        this.compileTextWithSnippets($scope.text);
	};

	$scope.prettifyCodeSnippet = function(){
        $('.code-compiled').val($scope.text);
        prettyPrint();
        alert($('.code-compiled').val());
	};

	/**
	 * Remove Snippets from actual snippets list
	 * @return {bool} Boolean value of return
	 */
	$scope.removeSnippet = function( index ){
		$scope.snippets.splice(index, 1);
	};

	/**
	 * Remove Snippets from actual snippets list
	 * @return {bool} Boolean value of return
	 */
	$scope.selectSnippetByLanguage = function( item ){
		
		alert('item: '+item);
		$scope.snippets = SnippetService.get({snippet: item}, function(phone) {
			console.log(phone);
			alert(phone);
		});

	};

	/**
	 * Compile the text in editor with the snippets inserteds
	 * @return {string} the text formated
	 */
	$scope.compileTextWithSnippets = function(text){
		var textWithSnippets = text;
		$($scope.snippets).each( function(i, data){
			textWithSnippets = $scope.stringReplace( '<' + data.tag + '></' + data.tag + '>', data.snippet,  textWithSnippets);
		});
		$scope.text = text;
		$('.code-compiled').html(textWithSnippets);
		prettyPrint();
	}
	
	/**
	 * String Replace for Text Compilation
	 * 
	 * @param  {[type]} old_string [description]
	 * @param  {[type]} new_string [description]
	 * @param  {[type]} string     [description]
	 * @return {[type]}            [description]
	 */
	$scope.stringReplace = function(old_string, new_string, string) {
	    var count, pos_old_string;
	    string = $.trim(string);
	    if (( typeof(old_string) == "object" ) &&(old_string.length)){
	        count = old_string.length;
	        for(var pos=0; count > pos; pos++){
	            pos_old_string = old_string[pos];
	            while (string.indexOf(pos_old_string) != -1) {
	                string = string.replace(pos_old_string, new_string);
	            }
	        }
	    }else{
	        while (string.indexOf(old_string) != -1) {
	            string = string.replace(old_string, new_string);
	        }
	    }
	    return string;
	};
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

SnippetCtrl.$inject = ['$rootScope', '$scope'];

//	Controller 	TWITTER
var TwitterCtrl = function ($scope, TwitterService){

	/**
	 * Initial value for search in twitter
	 * @type {String}
	 */
	$scope.searchTerm = '@bahiajs';

	/**
	 * Search information search term based
	 * @return {array} array json with the informations result
	 */
	$scope.doSearch = function(){
		$scope.twitterResult = TwitterService.get({ q : $scope.searchTerm });
	}

	$scope.doSearch();
};

var BeerCounter = function($scope, $locale) {
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