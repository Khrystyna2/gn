$(document).ready(function() {

	$('.menu-btn').on('click', function() {
		$(this).toggleClass('menu-btn_active');
		$('.menu').toggleClass('menu_active');
	});


	$('.gallery-visible li a').on('click', function(e) {
		e.preventDefault();
		$('.gallery-visible li').toggleClass('hide');
		$(this.hash).addClass('show');
	});
	// $('#people').on('click', function() {
	// 	$('.gallery-visible li').toggleClass('hide');
	// 	$('#peopleDesc').addClass('show');
	// });
	// $('#architecture').on('click', function() {
	// 	$('.gallery-visible li').toggleClass('hide');
	// 	$('#architectureDesc').addClass('show');
	// });
	// $('#travel').on('click', function() {
	// 	$('.gallery-visible li').toggleClass('hide');
	// 	$('#travelDesc').addClass('show');
	// });

	$('.gallery-visible__btn').click(function() {
		$('.gallery-visible li').toggleClass('hide');
		$('#landscapes, #people, #architecture, #travel').removeClass('show');
	});

	$('.gallery-desc__btn').click(function() {
		$('body,html').animate({
			scrollTop: $('.gallery-desc__img').height()
		}, 1000);
	});
	
});