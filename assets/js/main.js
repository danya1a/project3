$(function() {
	// HEADER FIXED
	var $header = $('.header');

	$(window).on('scroll', function() {
		if ( $(window).scrollTop() >= 5 ) {
			$header.addClass('is-scroll');
		} else {
			$header.removeClass('is-scroll');
		}
	});



	// NAV ON MOBILES
	var $nav = $('.js-nav'),
		$overlay = $('.box-overlay'),
		$body = $('body'),
		$burger = $('.js-burger');


	$burger.on('click', function() {
		if ( !$(this).hasClass('is-active') ) {
			$(this).addClass('is-active');
			$nav.addClass('is-active');
			$overlay.fadeIn();
			$body.addClass('nav-is-active');
		} else {
			navHide();
		}
	});

	$overlay.on('click', navHide);

	function navHide() {
		$burger.removeClass('is-active');
		$nav.removeClass('is-active');
		$overlay.fadeOut();
		$body.removeClass('nav-is-active');
	}


	//ANCHORS
	var $anchors = $('.js-anchor');

	$anchors.on('click', function(e) {
		e.preventDefault();

		var id = $(this).attr('href');

		$('html, body').animate({scrollTop:$(id).offset().top - $header.innerHeight() / 2 }, 800);
		navHide();
	});


	// DARK-THEME
	$('.js-switcher').on('click', function() {
		$('body').toggleClass('dark-theme');
	});


	// ************************
	$('.js-elem').on('click', function(e) {
		var header = e.target.closest('.elem__header');

		if( header ) {
			$(this).siblings().removeClass('is-active').find('.elem__dropdown').slideUp(200);

			$(this).toggleClass('is-active');
			$(this).find('.elem__dropdown').slideToggle(200);
		}


		var input = e.target.closest('.choice');

		if ( input ) {
			var inputTxt = $(input).find('.choice__txt').html();

			$(this).find('.elem__header-content').html(inputTxt);
			console.log(inputTxt);
		}
	});


    $(document).on('click touchstart', function(e) {

    	 if ( !$(e.target).is(".js-elem *") && !$(e.target).is(".js-elem") ) {
            $(".js-elem").removeClass('is-active').find('.elem__dropdown').slideUp(200);
        }

    });


	// MODALS
	$('.js-modal-target').on('click', function(e) {
		e.preventDefault();
		
		var modalTitle = $(this).attr('href');

		$(modalTitle).addClass('is-show');
	});


	$('.js-modal-bg').on('click', modalHide);
	$('.js-modal-close').on('click', modalHide);

	function modalHide() {
		$('.modal-wrap').removeClass('is-show');
	}



	// *****************************************
	// $('.js-log-in').on('click', function(e) {
	// 	e.preventDefault();

	// 	$('.js-form-part').html(
	// 		'<h3 class="heading-3">Log In</h3>' +
	// 		'<div class="form-row"><input type="email" class="form-control" placeholder="Email address"></div>' +
	// 		'<div class="form-row"><input type="password" class="form-control" placeholder="Create Password"></div>' +
	// 		'<div class="form-footer"><button type="submit" class="button button_full">Log in</button></div>'
	// 	)
	// });


	//go to
    $(window).on('scroll', function(){
        if ($(this).scrollTop() > $(window).height()) {
            $('.go-to').addClass('is-visible');
        } else {
            $('.go-to').removeClass('is-visible');
        }
    });
    $('.go-to').on('click', function(e){
    	e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop:$(target).offset().top}, 800);
    });


    // ******************** PLUGINS **********************************

	AOS.init({
        duration: 800,
        once: true,
        //easing: 'ease-out-back',
        disable: 'mobile'
    });
});