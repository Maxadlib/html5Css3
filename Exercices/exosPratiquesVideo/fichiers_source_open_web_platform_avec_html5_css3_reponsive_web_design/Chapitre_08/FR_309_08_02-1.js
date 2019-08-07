var cadre
var cadre_context
window.onload = function(){
	cadre = document.getElementById("cadre");
	cadre.width = 600;
	cadre.height = 600;
	cadre_context = cadre.getContext("2d");
	cadre_context.lineWidth="3"; 
	cheminVert()
	cheminRouge()
}

function cheminVert(){
	cadre_context.moveTo(100, 100);
	cadre_context.lineTo(400, 200);
	trace("#4C6600")
}
function cheminRouge(){
	cadre_context.beginPath();
	cadre_context.moveTo(100, 100);
	cadre_context.lineTo(100, 150);
	cadre_context.lineTo(200, 250);
	cadre_context.lineTo(300, 300);
	trace("#ff0033");
}

function trace(arg){
	cadre_context.strokeStyle = arg
	cadre_context.stroke();
}
