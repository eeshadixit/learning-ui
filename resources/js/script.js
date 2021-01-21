$(document).ready(function() {

    //for sticky navigation
    $('.js--section-features').waypoint(function(direction) {
        direction == "down" ? $('nav').addClass('sticky') : $('nav').removeClass('sticky')
    }, {
        offset: '60px;'
    });

    //scroll on buttons
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
    });

    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
    });

    //navigation scroll
    $(function() {
        $('a[href*=]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000); // The number here represents the speed of the scroll in milliseconds
                return false;
            }
        }});
    });

    //adding animations
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animate__animated animate__pulse');
    }, {
        offset: '50%'
    });

    /* mobile navigation */
    $('.js--small-nav').click(function() {
        var nav = $('.js--main-nav');
        nav.slideToggle(200);
        $('#menu').toggle();
        $('#close').toggle();
        if($('#close').is(":visible")) {
            $("#close").css("display", "block");
        }
    });

});