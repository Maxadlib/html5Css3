$(document).ready(function(){
	$('section').hide();
	$('header').click(function(e) {
        $('section',$(this).parent()).slideToggle('slow')
    });
	
});  