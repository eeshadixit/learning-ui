$(document).ready(function() {

    //for sticky navigation
    $('.js--section-features').waypoint(function(direction) {
        direction == "down" ? $('nav').addClass('sticky') : $('nav').removeClass('sticky')
    }, {
        offset: '60px;'
    });
});