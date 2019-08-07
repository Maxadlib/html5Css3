var cadre
var cadre_context
window.onload = function(){
	cadre = document.getElementById("cadre");
	cadre.width = 600;
	cadre.height = 600;
	cadre_context = cadre.getContext("2d");
	cadre_context.lineWidth="3";  
	//ajouteTexte()
	//ajoutePathTexte()
	ajoutePathTexteImage()
}
function ajoutePathTexteImage(){
	cadre_context.font = "12em Verdana";

	var img = new Image()
	img.src = 'FR_309_08_04.jpg'
	img.onload = function(){
		cadre_context.fillStyle = "#000";// 204000
		cadre_context.fillText("Fruits",30,200);
		cadre_context.globalCompositeOperation = "source-atop";
		cadre_context.drawImage(img, 30, 50);
	}
	
	
}


function ajoutePathTexte(){
	cadre_context.font = "4em Verdana";
	cadre_context.fillStyle = "rgba(105,140,0,0.36)";
	cadre_context.strokeStyle = "#204000";
	cadre_context.fillText("Texte en traçé",100,200);
	cadre_context.strokeText("Texte en traçé",100,200);

}
function ajouteTexte(){
	cadre_context.font = "2em Verdana";
	//cadre_context.textBaseline = "top";
	cadre_context.fillText("Texte affiché sur le canvas", 100,100);
}
