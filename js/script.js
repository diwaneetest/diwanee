$(document).ready (function(){
    $(".dropdown-btn").on("click", function (){
       $(this).hide();
        $(".esc").show();
        $(".dropdown-list").slideDown();
    });

    $(".esc").on("click", function(){
        $(this).hide();
        $(".dropdown-btn").show();
        $(".dropdown-list").slideUp();
    });
});