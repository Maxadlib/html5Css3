var cadre
var cadre_context
window.onload = function(){
	cadre = document.getElementById("cadre");
	cadre.width = 600;
	cadre.height = 600;
	cadre_context = cadre.getContext("2d");
	//importeImage()
	recadreTexteImage()
}
function importeImage(){
	var img = new Image();
    img.src = 'FR_1157_07_01/FR_1157_07_01.png';
	img.onload = afficheImage
}
function afficheImage(){
	cadre_context.drawImage(this, 0, 0, this.width,this.height);
}
function recadreTexteImage(){
	cadre_context.font = "11.75em Impact";

	var img = new Image()
	img.src = 'FR_1157_07_01/FR_1157_07_01.jpg'
	img.onload = function(){
		cadre_context.fillStyle = "#000";// 204000
		cadre_context.fillText("CANVAS",4,340);
		cadre_context.globalCompositeOperation = "source-atop";
		cadre_context.drawImage(this, 0, 0);
	}
}