/*global $, jquery, alert ,console ,scrollY*/



$(function () {

	"use strict";

	$('.cart-img').click(function () {
		$('.item-selected').toggle(500);

	});
	if ($(window).width() >= 710) {
		$('.navbar-default .navbar-nav > li').hover(function () {
			$(this).children(".drop-down").toggle(500);
		}, function () {
			$(this).children(".drop-down").css("display", "none");
		});

		$('.drop-down').hover(function () {
			$(this).css('display', 'block');
		}, function () {
			$(this).css("display", "none");
		});
	}

	$('.fa-user').click(function () {
		$('.kind-sign').toggle(50);
		$('.login-box-user').toggle(50);
		$('.fa-caret-right').show(50);
	});

	$('.fa-users').click(function () {
		$('.kind-sign').toggle(50);
		$('.login-box-users').toggle(50);
		$('.fa-caret-right').toggle(50);
		$('.fa-caret-right').show(50);
	});

	$('.fa-caret-right').click(function () {
		$('.kind-sign').toggle(50);
		$('.login-box-user').hide();
		$('.login-box-users').hide();
		$('.fa-caret-right').hide(50);
	});

	$('.create-account').click(function () {
		$('.login-box-user').hide();
		$('.login-box-users').hide();
		$('.signup-box').toggle();
		$('.fa-caret-right').hide(50);
	});

	$('.sign-in').click(function () {
		$('.login-box-user').show();
		$('.login-box-users').hide();
		$('.signup-box').toggle();
		$('.fa-caret-right').show(50);
	});





	$('.owl-one').owlCarousel({
		rtl: true,
		loop: true,
		margin: 10,
		nav: true,
		navText: ["قبل <i class='fa fa-chevron-right'></i>", "بعد <i class='fa fa-chevron-left'></i>"],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	});

	$('.owl-two').owlCarousel({
		items: 1,
		rtl: true,
		animateIn: 'flipInX',
		margin: 30,
		stagePadding: 30,
		smartSpeed: 450,
		loop: true,
		nav: true,
		navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
		dots: false

	});



	$('.owl-third').owlCarousel({
		navigation: true,
		rtl: true,
		loop: true,
		margin: 10,
		nav: true,
		navText: ["قبل <i class='fa fa-chevron-right'></i>", "بعد <i class='fa fa-chevron-left'></i>"],
		items: 4,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 3
			}
		}
	});


	$('.owl-four').owlCarousel({
		rtl: true,
		loop: true,
		margin: 110,
		nav: true,
		navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
		items: 4,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	});
	$('.owl-five').owlCarousel({
		rtl: true,
		loop: true,
		margin: 110,
		items: 4,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

	$('.owl-six').owlCarousel({
		rtl: true,
		loop: true,
		margin: 110,
		items: 4,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

	



//
//
//	uplaod.onchange = function () {
//		'use strict';
//
//		var fullPath = uplaod.value;
//		if (fullPath) {
//			var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
//			var filename = fullPath.substring(startIndex);
//			if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
//				filename = filename.substring(1);
//			}
//
//		}
//
//		uploadlabel.innerHTML = filename;
//		uplaod.setAttribute('disabled', 'disabled');
//
//	};



	function readURL(uplaod1) {

		if (uplaod1.files && uplaod1.files[0]) {
			var reader = new FileReader();

			reader.onload = function (e) {
				$('#blah').attr('src', e.target.result);
				$('#fa1').toggle();
				uplaod1.setAttribute('disabled', 'disabled');
				$('img#blah').toggle();
			}

			reader.readAsDataURL(uplaod1.files[0]);
		}
	}

	$(".img-inp1").change(function () {
		readURL(this);
	});
	
	
//	uploader
	
	function readURL1(uplaod2) {

		if (uplaod2.files && uplaod2.files[0]) {
			var reader1 = new FileReader();

			reader1.onload = function (e1) {
				$('#blah2').attr('src', e1.target.result);
				$('#fa2').toggle();
				uplaod2.setAttribute('disabled', 'disabled');
				$('img#blah2').toggle();
			}

			reader1.readAsDataURL(uplaod2.files[0]);
		}
	}

	$(".img-inp2").change(function () {
		readURL1(this);
	});
	
	
//	uploader
	
	
	function readURL2(uplaod3) {

		if (uplaod3.files && uplaod3.files[0]) {
			var reader2 = new FileReader();

			reader2.onload = function (e2) {
				$('#blah3').attr('src', e2.target.result);
				$('#fa3').toggle();
				uplaod3.setAttribute('disabled', 'disabled');
				$('img#blah3').toggle();
			}

			reader2.readAsDataURL(uplaod3.files[0]);
		}
	}

	$(".img-inp3").change(function () {
		readURL2(this);
	});
	
	
//	uploader
		function readURL3(uplaod4) {

		if (uplaod4.files && uplaod4.files[0]) {
			var reader3 = new FileReader();

			reader3.onload = function (e3) {
				$('#blah4').attr('src', e3.target.result);
				$('#fa4').toggle();
				uplaod4.setAttribute('disabled', 'disabled');
				$('img#blah4').toggle();
			}

			reader3.readAsDataURL(uplaod4.files[0]);
		}
	}

	$(".img-inp4").change(function () {
		readURL3(this);
	});
	
	
//	uploader
	
			function readURL4(uplaod5) {

		if (uplaod5.files && uplaod5.files[0]) {
			var reader4 = new FileReader();

			reader4.onload = function (e4) {
				$('#blah5').attr('src', e4.target.result);
				$('#fa5').toggle();
				uplaod5.setAttribute('disabled', 'disabled');
				$('img#blah5').toggle();
			}

			reader4.readAsDataURL(uplaod5.files[0]);
		}
	}

	$(".img-inp5").change(function () {
		readURL4(this);
	});
	
	
//	uploader
	
			function readURL5(uplaod6) {

		if (uplaod6.files && uplaod6.files[0]) {
			var reader5 = new FileReader();

			reader5.onload = function (e5) {
				$('#blah6').attr('src', e5.target.result);
				$('#fa6').toggle();
				uplaod6.setAttribute('disabled', 'disabled');
				$('img#blah6').toggle();
			}

			reader5.readAsDataURL(uplaod6.files[0]);
		}
	}

	$(".img-inp6").change(function () {
		readURL5(this);
	});
	
	
//	uploader
	
	function readURL6(uplaod7) {

		if (uplaod7.files && uplaod7.files[0]) {
			var reader6 = new FileReader();

			reader6.onload = function (e6) {
				$('#blah7').attr('src', e6.target.result);
				$('#fa7').toggle();
				uplaod7.setAttribute('disabled', 'disabled');
				$('img#blah7').toggle();
			}

			reader6.readAsDataURL(uplaod7.files[0]);
		}
	}

	$(".img-inp7").change(function () {
		readURL6(this);
	});
	
	
//	uploader
	function readURL7(uplaod8) {

		if (uplaod8.files && uplaod8.files[0]) {
			var reader7 = new FileReader();

			reader7.onload = function (e7) {
				$('#blah8').attr('src', e7.target.result);
				$('#fa8').toggle();
				uplaod8.setAttribute('disabled', 'disabled');
				$('img#blah8').toggle();
			}

			reader7.readAsDataURL(uplaod8.files[0]);
		}
	}

	$(".img-inp8").change(function () {
		readURL7(this);
	});
	
	
//	uploader
	
	function readURL8(uplaod9) {

		if (uplaod9.files && uplaod9.files[0]) {
			var reader8 = new FileReader();

			reader8.onload = function (e8) {
				$('#blah9').attr('src', e8.target.result);
				$('#fa9').toggle();
				uplaod9.setAttribute('disabled', 'disabled');
				$('img#blah9').toggle();
			}

			reader8.readAsDataURL(uplaod9.files[0]);
		}
	}

	$(".img-inp9").change(function () {
		readURL8(this);
	});
	
	
//	uploader
	
	
	function readURL9(uplaod10) {

		if (uplaod10.files && uplaod10.files[0]) {
			var reader9 = new FileReader();

			reader9.onload = function (e9) {
				$('#blah10').attr('src', e9.target.result);
				$('#fa10').toggle();
				uplaod10.setAttribute('disabled', 'disabled');
				$('img#blah10').toggle();
			}

			reader9.readAsDataURL(uplaod10.files[0]);
		}
	}

	$(".img-inp10").change(function () {
		readURL9(this);
	});
	
	
//	uploader
//	plus-add-page
	
	$('i.fa.fa-plus.left').click(function () {
		$(this).toggleClass('fa-plus');
		$(this).toggleClass('fa-minus');
		$(this).siblings('ul').toggle();
		
	});
	
	
	$('.btn-2').click(function (){
		$(this).siblings('.aff-box').css('transform', 'translatey(0px)');
	});
	
	$('.aff-box i.fa.fa-close').click(function (){
		$(this).parent('.aff-box').css('transform', 'translatey(-220px)');
		
	});
	
	$('.select-all').click(function (){
		$(this).siblings('.aff-box textarea').select();
		
	});
	$('.copy-text').click(function (){
		var target = $(this).siblings('.aff-box textarea').select();
		target = document.execCommand('copy')
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//	plus-add-page




});