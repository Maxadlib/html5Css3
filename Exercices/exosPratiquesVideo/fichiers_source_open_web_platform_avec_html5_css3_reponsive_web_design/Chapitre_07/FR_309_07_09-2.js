$(document).ready(function(){
	$('header').toggle(
		function(e) {
			$('section',$(this).parent()).animate({
				opacity:1,
				padding:"1em",
				fontSize:'1.2em'
				
			},500)
		},
		function(e) {
			$('section',$(this).parent()).animate({
				opacity:0.3,
				padding:0,
				fontSize:'1em'
				
			},500)
		}
	
	);
	
});  



