$(document).ready(function(){
	var haut = $('section').height()
	$('section').css('height',0)
	$('header').toggle(
		function(e) {
			$('section',$(this).parent()).animate({
				opacity:1,
				height:haut
			},{
				duration: 500,
				easing:'easeOutBounce'
		  	})
		},
		function(e) {
			$('section',$(this).parent()).animate({
				opacity:0.3,
				height:0,
				easing:'easeOutBounce'
				
			},{
				duration: 500,
				easing:'easeOutBounce'
		  	})
		}
	
	);
	
});  



