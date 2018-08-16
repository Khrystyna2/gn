$(document).ready(function() {

	$('.menu-btn').on('click', function() {
		$(this).toggleClass('menu-btn_active');
		$('.menu').toggleClass('menu_active');
	});


	$('#landscapes').on('click', function() {
		$('.gallery-visible li').toggleClass('hide');
		$('#landscapesDesc').addClass('show');
	});
	$('#people').on('click', function() {
		$('.gallery-visible li').toggleClass('hide');
		$('#peopleDesc').addClass('show');
	});
	$('#architecture').on('click', function() {
		$('.gallery-visible li').toggleClass('hide');
		$('#architectureDesc').addClass('show');
	});
	$('#travel').on('click', function() {
		$('.gallery-visible li').toggleClass('hide');
		$('#travelDesc').addClass('show');
	});

	$('.gallery-visible__btn').click(function() {
		$('.gallery-visible li').toggleClass('hide');
		$('#landscapesDesc, #peopleDesc, #architectureDesc, #travelDesc').removeClass('show');
	});
	
});