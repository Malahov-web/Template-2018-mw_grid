/*
 *  1. ��������� ��������� mw_accordeon_mobile
 * ----------------------------------------------------------------- 
*/

// jQuery v 3.3.1
// �����:
// ������� �-�, �������� �� ��� �������.

 alert();
 
jQuery(document).ready(function( $ ){


var containerWidth = $('.container').innerWidth(); // consoleLog(containerWidth);
var breakpointMobile = 768;
var pace = 400;

if ( containerWidth <= breakpointMobile ){ 

	var pace = 400;
	
	// �������� ������� �����������
	$('.js-accordeon__content').hide();

	// ������������ 
    $('.js-accordeon__title ').click(function (e) {
	
		accordeonContent = $(this).closest('.js-accordeon').find('.js-accordeon__content');
		
		// ��������� ���� �����
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