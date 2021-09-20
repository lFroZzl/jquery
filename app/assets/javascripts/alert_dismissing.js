$(document).ready(function() {

    $('.alert-close').click(function(){
        $('.alert').fadeOut('slow', function(){
            $(this).remove();
        });
    });
})