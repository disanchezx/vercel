// Freelancer Theme JavaScript

(function ($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Floating label headings for the contact form
    $(function () {
        $("body").on("input propertychange", ".floating-label-form-group", function (e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function () {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function () {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });


    $(function () {
        $('.cool').hover(function () {
            $(".cool").animate({
                fontSize: "+=1em"
            });
        }, function () {
            $(".cool").animate({
                fontSize: "-=1em"
            });
        });
    });

    /**$(function () {
        $('.grande').hover(function () {
            $(".grande").animate({
                fontSize: "+=1em"
            }, "slow");
        }, function () {
            $(".grande").animate({
                fontSize: "-=1em"
            }, "slow");
        });
    });**/
    $(function () {
        $('.contacto i').hover(function () {
            $(this).animate({
                color: "#2C3E50",
                width: "+=20px"
            });
        }, function () {
            $(this).animate({
                color: "#18BC9C",
                width: "-=20px"
            });
        });
    });

    $(function () {
        $('.image_on').hover(function () {
            $('.image_on').animate({
                display: "none"
            }, "slow");
        });
    });

    $(function () {
        var video = $('#vid');
        $('#bsurprise').click(function () {
            if ($('#surprise').css("display") === "none") {
                $('#surprise').css("display", "block");
                $('#vid').get(0).play();
                $('#vid').get(0).loop = true;
            } else {
                $('#surprise').css("display","none");
                $('#vid').get(0).pause();
                $('#vid').get(0).loop=false;
            }
        });
    });



})(jQuery); // End of use strict