//custom script 

$(document).ready(function(){
    //owl banner slider
    $("#banner-slider .owl-carousel").owlCarousel({
        autoPlay: 3000,
        items: 1, // THIS IS IMPORTANT
        loop: true,
        nav: true
    });

});