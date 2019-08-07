$(document).ready(function(){
	var haut = $('section').height()
	$('section').css('height',0)
	$('header').toggle(
		function(e) {
			$('section',$(this).parent()).animate({
				opacity:1,
				height:haut
				
			},
			
			{
				duration: 1500,
				specialEasing: {
				  opacity: 'linear',
				  height: 'easeOutBounce'
				}
		  	}
		  
		  )
		},
		function(e) {
			$('section',$(this).parent()).animate({
				opacity:0.3,
				height:0
				
			},
			
			{
				duration: 1500,
				specialEasing: {
				  opacity: 'linear',
				  height: 'easeOutBounce'
				}
		  	}
		  
		  )
		}
	
	);
	
});  



