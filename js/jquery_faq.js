

// $(".invisible").click(function() {
//     $(".invisible").toggle();
// });
$(document).ready(function() {

$("#toggle").click(function() {
    $('.invisible').toggle();

});
});

    $("#Change").click(function() {
        $("ul").find("li:last-child").css("background-color", "yellow");
    });

$("h3").click(function() {
    $("ul").children().css("font-weight", "bold");
});

$("li").click(function() {
    $(this).closest("ul").find("li:first-child").css("color", "blue");
});


