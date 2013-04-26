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
        $show_snippet_info = $(this);
        $('.close, .modal-backdrop').live('click', function(){
            $show_snippet_info.attr('checked', false);
        });
    });
    prettyPrint();

});