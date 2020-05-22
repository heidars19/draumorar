

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
            $(".parallax").css({"opacity": "0.3"})
        }
        else {
            $(".parallax").css({"opacity": "1"})
        }
    })
});