// JavaScript Document

window.onload = function(){
	var cadre = document.getElementById("cadre");
	cadre.width = 600;
	cadre.height = 600;
	var cadre_context = cadre.getContext("2d");
	cadre_context.fillStyle = "rgba(105,140,0,0.25)"
	cadre_context.strokeStyle = "#4C6600";
	//cadre_context.globalAlpha = 0.3
	//cadre_context.fillStyle = "#BBCB8C";
	
	cadre_context.fillRect(100, 100, 300, 400);
	cadre_context.strokeRect(100, 100, 300, 400);
}