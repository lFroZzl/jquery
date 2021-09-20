$(document).ready(function () {

    $('.btn-accordion').click(function () {

        var div_id = $(this).attr('target');
        var accordion_item_id = $('#' + div_id);

    //  $('.collapse-accordion').hide('slow');


        if (accordion_item_id.is(':visible')){
            accordion_item_id.hide('slow');
        }else{
            $('.collapse-accordion').hide('slow');
            accordion_item_id.show('slow');
        }    

    //   accordion_item_id.is('visible')
    //        ? accordion_item_id.hide('slow')
    //        : accordion_item_id.show('slow');
    });
})