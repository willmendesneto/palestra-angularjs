// Stolen from StackOverflow. Find all </code><pre><code>
// elements on the page and add the "prettyprint" style. If at least one
// prettyprint element was found, call the Google Prettify prettyPrint() API.
//http://sstatic.net/so/js/master.js?v=6523
$(document).ready( function(){

    $('.pretty-print').live('click', function(){
    });
    //  Initialyzing the tabby plugin in focus event
    $('.texteditor').live('focus', function(){
    	$(this).tabby();
    });

    //  Setting the active menu item
    $('.main-menu').live('click', function(){
    	$('.main-menu').removeClass('active');
    	$(this).addClass('active');
    });
    //  Showing form with snippet informations
    $('.show-snippet-info').live('click', function(){
        $("#form-snippet").modal('show');
        $('.show-snippet-info').attr('checked', false);
        $(this).attr('checked', true);
    });
    prettyPrint();

});