$(document).on('ready',function(){
	$('#boton-menu').on('click',function(){

		$('#menu-ul').slideToggle('fast');
			
		$('.titulo-menu').toggleClass('title-3d');		

	});	
	$(function(){
		$.stellar({
			horizontalScrolling: false,
			responsive: true,
			horizontalOffset: 0,
			positionProperty: 'transform',
			verticalOffset: 0
		});
	});
	
});