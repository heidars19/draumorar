// Initializing sidenav-trigger that makes the mobile menu droppable
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, '');
});

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

// $(document).ready(function() {
//     $(window).scroll(function() {
//         if ($(this).scrollTop() > 1) {
//             $(".parallax").css({"opacity": "0.3"})
//         }
//         else {
//             $(".parallax").css({"opacity": "1"})
//         }
//     })
// })

