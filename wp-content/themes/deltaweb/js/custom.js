// $(document).ready(function() {

//   $("#owl-demoes").owlCarousel({

//       autoplayTimeout: 3000, //Set AutoPlay to 3 seconds
//       autoplay: true,
//       loop:true,
//       items : 6,
//       dots: false,
//       responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:2,
//             nav:true
//         },
//         1000:{
//             items:5,
//             nav:true

//         }
//     }

//   });

// });


$(function() { // Dropdown toggle
    $('.drop-arrow').click(function() {
        $(this).next('.dropdown-menu').slideToggle();
    });

    $(document).click(function(e) {
        var target = e.target;
        if (!$(target).is('.drop-arrow') && !$(target).parents().is('.drop-arrow'))
        //{ $('.dropdown-menu').hide(); }
        {
            $('.dropdown-menu').slideUp();
        }
    });
});


$('.project-slide').owlCarousel({

    items: 1.5,
    autoplaySpeed: 3e3,
    navSpeed: 3e3,
    paginationSpeed: 3e3,
    slideSpeed: 3e3,
    smartSpeed: 3e3,
    nav: true,
    autoplay: true,
    dots: false,
    loop: true,
    margin: 30,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1.5,
        },
        1000: {
            items: 1.5,
        }
    }

});

$('.galler-slide').owlCarousel({

    items: 4,
    autoplaySpeed: 3e3,
    navSpeed: 3e3,
    paginationSpeed: 3e3,
    slideSpeed: 3e3,
    smartSpeed: 3e3,
    nav: true,
    autoplay: true,
    dots: false,
    loop: true,
    margin: 30,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
        }
    }

});

$('.galler-slide2').owlCarousel({

    items: 4,
    rtl: true,
    autoplaySpeed: 3e3,
    navSpeed: 3e3,
    paginationSpeed: 3e3,
    slideSpeed: 3e3,
    smartSpeed: 3e3,
    nav: true,
    autoplay: true,
    dots: false,
    loop: true,
    margin: 30,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
        }
    }

});

$('.case-studies-slide').owlCarousel({

    items: 3,
    autoplaySpeed: 3e3,
    navSpeed: 3e3,
    paginationSpeed: 3e3,
    slideSpeed: 3e3,
    smartSpeed: 3e3,
    nav: true,
    autoplay: true,
    dots: false,
    loop: true,

    margin: 30,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],

});

$(document).ready(function() {
    $("#tech-slider").owlCarousel({
        items: 3,

        loop: true,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [1000, 2],
        itemsMobile: [700, 1],
        pagination: false,
        navigationText: false,
        autoplay: true
    });
});
$(document).ready(function() {
    $("#indus-slider").owlCarousel({
        items: 7,
        loop: true,
        pagination: false,
        navigationText: false,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 7,
            }
        }
    });
});

$(document).ready(function() {
    $(".owl-servies").owlCarousel({
        items: 4,
        margin: 40,
        loop: true,
        pagination: false,
        navigationText: false,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    });
});
$(document).ready(function() {
    $("#news-slider").owlCarousel({
        items: 1,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [1000, 2],
        itemsMobile: [700, 1],
        pagination: false,
        navigationText: false,
        autoPlay: true
    });
});
$(function() {
    var header = $(".social");
    // var headnew = $(".dropdown-menu");

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 200) {
            header.addClass("scrolled");
            // headnew.addClass("menu");
        } else {
            header.removeClass("scrolled");
            // headnew.removeClass("menu");
        }
    });

});
// $(function() {
//     var headnew = $(".header");

//     $(window).scroll(function() {    
//         var scroll = $(window).scrollTop();
//         if (scroll >= 5) {
//              headnew.addClass("newdown");
//         } else {
//             headnew.removeClass("newdown");
//         }
//     });

// });
// $(function() {
//     var headnewup = $(".header");

//     $(window).scroll(function() {    
//         var scroll = $(window).scrollDown();
//         if (scroll >= 5) {
//              headnewup.addClass("newdown-up");
//         } else {
//             headnewup.removeClass("newdown-up");
//         }
//     });

// });
function isValidUrl(url) {

    var myVariable = url;
    if (/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(myVariable)) {
        return 1;
    } else if (/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(myVariable)) {
        return 1;
    } else {
        return -1;
    }
}
$("#websubmit").click(function(e) {
    if (isValidUrl($("#webURL").val()) == 1) {
        var weburl = $("#webURL").val();
        $("#webURLformpost").val(weburl);
        //alert($("#webURL").val());
        e.preventDefault();
        var jQuerynewEl = $('<div class="outerwht"></div>');
        jQuerynewEl.on("click", function() {
            $(this).remove();
        });
        $(this).parents('body').find('.form-contact-us').prepend(jQuerynewEl);
        //var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: ($('#form-open').offset().top) - 50
        }, 2000);
        $(".md-form ").next().slideDown();
        $(".md-form ").addClass('active');
        $('#form-open').focus();
    } else {
        alert("Please enter valid Website URL");
        return false;
    }

});



// poligon section
$(document).ready(function() {
    function hex_initial_animation() {
        $(".hex-wrap,.hover-notify").velocity("transition.expandIn", {
            stagger: 150
        });
        $(".hex-wrap").velocity("callout.pulse");
        $(".hoverblock").velocity("fadeOut", {
            delay: 3000,
            duration: 0
        });
    }
    hex_initial_animation();

    var hoverdetect = setInterval(function() {
        hovernotify()
    }, 3000);

    function hovernotify() {
        $(".hover-notify").velocity("callout.tada");
    }

    function myStopFunction() {
        $(".hover-notify").velocity('stop', true).velocity("fadeOut");
        clearInterval(hoverdetect);
    }

    $(".hex-init").mouseenter(function() {

        myStopFunction();

        var title_color = $(this).parent().attr("data-color");
        var title_name = $(this).parent().attr("data-title");
        var desc_name = $(this).parent().attr("data-content");

        function hex_description() {
            $('.code-description').velocity('stop', true).velocity("transition.slideRightBigIn");
            $('.' + desc_name).siblings().removeClass('desc-active');
            setTimeout(function() {
                $('.' + desc_name).addClass('desc-active');
                $('.code-descriptopn > div, .desc-active').children().velocity('stop', true).velocity("transition.slideRightBigIn", {
                    stagger: 300
                });
                $('.code-title, .desc-active span').velocity({
                    color: title_color
                }, {
                    queue: false
                });
                $('.code-title').text(title_name)
            }, 0);
        }
        hex_description();

        $(this).parent().addClass('hexactive');
        $('.hexactive').velocity({
            scaleX: "1.1",
            scaleY: "1.1"
        }, {
            duration: 200
        });

    }).mouseleave(function() {
        $('.hexactive').velocity('stop', true).velocity('reverse').removeClass('hexactive');
    });
});





(function($) {
    $.fn.countTo = function(options) {
        options = options || {};

        return $(this).each(function() {
            // set options for current element
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from: $(this).data('from'),
                to: $(this).data('to'),
                speed: $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals: $(this).data('decimals')
            }, options);

            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;

            // references & variables that will change with each update
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data('countTo') || {};

            $self.data('countTo', data);

            // if an existing interval can be found, clear it first
            if (data.interval) {
                clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);

            // initialize the element with the starting value
            render(value);

            function updateTimer() {
                value += increment;
                loopCount++;

                render(value);

                if (typeof(settings.onUpdate) == 'function') {
                    settings.onUpdate.call(self, value);
                }

                if (loopCount >= loops) {
                    // remove the interval
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;

                    if (typeof(settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value);
                    }
                }
            }

            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.text(formattedValue);
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0, // the number the element should start at
        to: 0, // the number the element should end at
        speed: 1000, // how long it should take to count between the target numbers
        refreshInterval: 100, // how often the element should be updated
        decimals: 0, // the number of decimal places to show
        formatter: formatter, // handler for formatting the value before rendering
        onUpdate: null, // callback method for every time the element is updated
        onComplete: null // callback method for when the element finishes updating
    };

    function formatter(value, settings) {
        return value.toFixed(settings.decimals);
    }
}(jQuery));

jQuery(function($) {

    $('.timer').each(count);

    $(window).scroll(function() {
        ($(window).scrollTop());
        if ($(window).scrollTop() > 2000 && $(window).scrollTop() < 3000) {
            $('.timer').each(count);
        }
    });

    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }
});


/*career image and video*/
$(document).ready(function() {
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },

        zoom: {
            enabled: true,

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            opener: function(openerElement) {

                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }

    });

    $('.image-popup-video').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-with-zoom',
        zoom: {
            enabled: true,
            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

        }

    });

});


/**/



$(".skills").addClass("active")
$(".skills .skill .skill-bar span").each(function() {
    $(this).animate({
        "width": $(this).parent().attr("data-bar") + "%"
    }, 1000);
    $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
});
setTimeout(function() {
    $(".skills .skill .skill-bar span b").animate({
        "opacity": "1"
    }, 1000);
}, 2000);