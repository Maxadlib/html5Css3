var cadre
var cadre_context
window.onload = function(){
	cadre = document.getElementById("cadre");
	cadre.width = 600;
	cadre.height = 600;
	cadre_context = cadre.getContext("2d");
	cadre_context.lineWidth="3";  

	importeImage()
}

function importeImage(){
	var img = new Image();
    img.src = 'FR_309_08_03.png';
	img.alt = 1
	img.onload = afficheImage
}
function afficheImage(){
	var l = this.width / this.alt
	var h = this.height / this.alt
	//cadre_context.drawImage(this, 0, 0, l,h);
	//recadreSimple(this)
	recadreMultiple(this)
}
function recadreSimple(arg){
	cadre_context.drawImage(arg, 200, 30, 190,200, 20,20,450,580);
}
function recadreMultiple(arg){
	for (var i=0 ; i <8 ; i++){
		for (var j = 0; j < 4; j++) {
			cadre_context.drawImage(arg, 200, 30, 190,200, i*50,j*50,50,50);
		}
	}
}