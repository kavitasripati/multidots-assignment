$(document).ready(function(){

	//fixed navbar js starts here
	$(window).on('scroll',function() {    
        var scroll = $(window).scrollTop(),
            mainHeader = $('#sticky-header'),
            mainHeaderHeight = mainHeader.innerHeight();
        
        // console.log(mainHeader.innerHeight());
        if (scroll > 1) {
            $("#sticky-header").addClass("sticky");
        }else{
            $("#sticky-header").removeClass("sticky");
        }
    });
	//fixed navbar js ends here

	// on click go to section js start here
	$(function(){
		$("a.page-scroll").bind("click",function(o){
			var e=$(this);
			$("html, body").stop().animate({
				scrollTop:$(e.attr("href")).offset().top},1500,"easeInOutExpo"),
				e.preventDefault()
		});
	});
	// on click go to section js start here

	// Loader js start here
    (function() {
        $(window).on('load', function() {
            $('#pre-status').fadeOut();
            $('#st-preloader').delay(350).fadeOut('slow')
        })
    }());
    // Loader js start here

    // scroll-up js start here
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                $('.scroll-up').addClass('show');
            } else {
                $('.scroll-up').removeClass('show');
            }
        });
        $('.scroll-up').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 1600);
            return !1
        });
    });
    // scroll-up js ends here


    //our work carousel js starts here
    $('.our-work-carousel').owlCarousel({
          loop: false,
          autoplay: false,
          autoplayTimeout: 5000,
          animateOut: 'fadeOut',
          smartSpeed: 1700,
          mouseDrag: false,
          nav: false,
          margin:30,
          dots:true,
          items:3,
          responsiveClass:true,
          responsive:{
          	0:{items:1},
          	600:{items:2},
          	800:{items:2},
          	1024:{items:3}
          }
    });
    //our work carousel js end here

    //testimonial carousel js starts here
    $('.testimonial-carousel').owlCarousel({
          loop: false,
          autoplay: false,
          autoplayTimeout: 5000,
          smartSpeed: 1700,
          mouseDrag: false,
          nav: false,
          dots:true,
          items:1
    });
    //testimonial carousel js end here

    // mobile menu js starts here
      $('.main-menu-handle').click(function () {
        $(this).toggleClass("active")
        $('.mobile-menu').toggleClass("menuactive")
      });
    // mobile menu js end here
});