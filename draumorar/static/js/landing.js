

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.parallax');
//     var instances = M.Parallax.init(elems, options);
// });

// Or with jQuery

$(document).ready(function(){
    $('.parallax').parallax();

});

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $("#background-image").css({"opacity": "0.3"})
        }
        else {
            $("#background-image").css({"opacity": "1"})
        }
    })
});