$(function() {
    $('#primero').css({"background-color": "red"});

    $("#esconder").click(function(){
        $(".segundo").hide();
    });

    $("#mostrar").click(function(){
        $(".segundo").show();
    });

});