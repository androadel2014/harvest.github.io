/*global $, jquery, alert ,console ,scrollY*/



$(function () {

	"use strict";

	$('.cart-img').click(function () {
		$('.item-selected').toggle(500);

	});

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
	
	
	







});