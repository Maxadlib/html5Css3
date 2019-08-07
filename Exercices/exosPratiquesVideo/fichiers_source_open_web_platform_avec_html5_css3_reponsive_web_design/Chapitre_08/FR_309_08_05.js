var cadre
var cadre_context
var ligneMax = 240
var ligneMin = 50
var larg = 60

var fruits = [
	{label:"Pomme",kgcal:52,image:"pomme",couleur:"rgba(202,164,102,0.64)"},
	{label:"Banane",kgcal:90,image:"banane",couleur:"rgba(226,212,177,0.81)"},
	{label:"Citron",kgcal:40,image:"citron",couleur:"rgba(239,185,63,0.78)"},
	{label:"Fraise",kgcal:36,image:"fraise",couleur:"rgba(189,83,35,0.75)"},
	{label:"Kiwi",kgcal:42,image:"kiwi",couleur:"rgba(153,153,93,0.63)"},
	{label:"Orange",kgcal:50,image:"orange",couleur:"rgba(206,121,31,0.56)"}
]

window.onload = function(){
	cadre = document.getElementById("cadre");
	cadre.width = 600;
	cadre.height = 600;
	cadre_context = cadre.getContext("2d");
	placeHisto()
}
function placeHisto(){
	for (var i=0;i<fruits.length;i++) {
		new creeCadre(i)
	}
}
function creeCadre(arg){
	var x = 100 + (arg * (larg+5))
	var y = fruits[arg].kgcal * (ligneMax - ligneMin) / 100
	importeImage(fruits[arg].image,x)
	
	
	cadre_context.fillStyle = "#444444"
	cadre_context.textAlign = "start"
	cadre_context.fillText(fruits[arg].label,x,ligneMax + 12);
	
	
	cadre_context.fillStyle = fruits[arg].couleur
	cadre_context.strokeStyle = "#444444";
	
	cadre_context.shadowColor = "#999";
    cadre_context.shadowBlur = 4;
    cadre_context.shadowOffsetX = 2;
    cadre_context.shadowOffsetY = 0;
	
	cadre_context.fillRect( x, ligneMax -y, larg, y );
	cadre_context.strokeRect( x, ligneMax -y, larg, y);
}


function importeImage(file,arg){
	var img = new Image();
	img['data-rang'] = arg
    img.src = 'FR_309_08_05-'+file+'.png';
	img.onload = afficheImage
}

function afficheImage(){
	var delta = larg / this.width
	var l = this.width * delta
	var h = this.height * delta
	cadre_context.drawImage(this, this['data-rang'], ligneMax + 12, l,h);
}













