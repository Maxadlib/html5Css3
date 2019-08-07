var cadre
var cadre_context
window.onload = function(){
	cadre = document.getElementById("cadre");
	cadre.width = 600;
	cadre.height = 600;
	cadre_context = cadre.getContext("2d");
	cadre_context.lineWidth="3";  
	cheminRouge()
	arcToRouge()
	arcBleu()
}
function arcBleu(){
	cadre_context.beginPath();
	cadre_context.arc(400, 350, 100, Math.PI/4, 3*Math.PI/4, true)
	trace("#0033FF")
}
function arcToRouge(){
	cadre_context.arcTo(400, 300, 400,400,50);
	trace("#ff0033");
}

function cheminRouge(){
	cadre_context.beginPath();//
	cadre_context.moveTo(100, 100);
	cadre_context.lineTo(100, 150);
	cadre_context.lineTo(300, 300);
	trace("#ff0033");
}

function trace(arg){
	cadre_context.strokeStyle = arg;
	cadre_context.stroke();
}