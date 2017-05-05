$(function () {
    $('body').scrollspy({
        target: '.navbar',
        offset: 50
    });

    $(window).resize(function () {
        if ($(window).width() < 992) {
            $('nav a').bind('click', function () {
                $('html, body').stop().animate({
                    scrollTop: $($(this).attr('href')).offset().top - 50
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        };
    });

    $('#btn1').click(function () {
        $('#education').fadeOut(500);
        $('#experience').fadeOut(500);
        $('#skills').fadeOut(500);
        $('#summary').delay(500).fadeIn(500);
    });
    $('#btn2').click(function () {
        $('#summary').fadeOut(500);
        $('#experience').fadeOut(500);
        $('#skills').fadeOut(500);
        $('#education').delay(500).fadeIn(500);
    });
    $('#btn3').click(function () {
        $('#summary').fadeOut(500);
        $('#education').fadeOut(500);
        $('#skills').fadeOut(500);
        $('#experience').delay(500).fadeIn(500);
    });
    $('#btn4').click(function () {
        $('#summary').fadeOut(500);
        $('#education').fadeOut(500);
        $('#experience').fadeOut(500);
        $('#skills').delay(500).fadeIn(500);
    });
 });