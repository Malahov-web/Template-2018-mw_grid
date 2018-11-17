/*
 *  1. Аккордеон мобильный mw_accordeon_mobile
 * ----------------------------------------------------------------- 
*/

// jQuery v 3.3.1
// Далее:
// сделать ф-ю, вызывать ее при ресайзе.

 alert();
 
jQuery(document).ready(function( $ ){


var containerWidth = $('.container').innerWidth(); // consoleLog(containerWidth);
var breakpointMobile = 768;
var pace = 400;

if ( containerWidth <= breakpointMobile ){ 

	var pace = 400;
	
	// Скрываем контент аккордеонов
	$('.js-accordeon__content').hide();

	// Обрабатываем 
    $('.js-accordeon__title ').click(function (e) {
	
		accordeonContent = $(this).closest('.js-accordeon').find('.js-accordeon__content');
		
		// Открываем если скрыт
		if  ( !accordeonContent.is(':visible') ) {
			accordeonContent.slideDown(pace);		
			$(this).addClass('opened')
		}
		else{
			if  ( (accordeonContent.is(':visible')) ) {
				accordeonContent.slideUp(pace);
				$(this).removeClass('opened')				
			}		
		}			

    });  

}// end if

});