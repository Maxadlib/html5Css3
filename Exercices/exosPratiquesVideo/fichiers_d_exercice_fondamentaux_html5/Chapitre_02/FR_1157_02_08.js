window.onload = function(){
	var p = document.getElementsByTagName('p')
	for (var i = 0, nb = p.length; i<nb; i++) {
		p[i].addEventListener('click',affiche)
	}
}
function affiche(){
	var datas = this.dataset, resultats
	if (Object.keys(datas).length === 0) {
		resultats = "Rien à afficher"
	} else {
		resultats = datas
	}
	//console.log(resultats)
	console.log(JSON.parse(resultats.infos).nature)
}