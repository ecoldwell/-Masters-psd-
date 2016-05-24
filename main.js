$(function() {

	// jQuery Goes here!

	//When we click on the hamburger

	$('.fa-bars, .mainNav a').on('click', function() {
		console.log('HI!');
		$('.mainNav').toggleClass('show');
	});

});			

$(function(){

				$('a').smoothScroll();
			});