window.onload = function(){
	var balise    = 'article';
	var resultat  = document.getElementsByTagName(balise);
	for (var i    = 0, nb = resultat.length; i < nb ; i++) {
		console.log(resultat[i])
	}
}