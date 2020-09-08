
$(function() {
    $('#buttonGuests').click(function() {
        $('.block-guests').slideToggle();
        $(".input-guests").toggleClass("input-guests-active");
        $(".block-guests").toggleClass("block-guests-active");
    });

    $(".background-minus").click(function(){
        var $input = $(this).parent().find("input");
        var count = parseInt($input.val())- 1;
        $input.val(count);
        $input.change();
        return false;

    });
    $(".background-plus").click(function (){
        var $input = $(this).parent().find("input");
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    })
});