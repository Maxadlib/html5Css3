
var couleurs = ['8d6cab','e68523','dd5143','008EBF']
function change(){
	var valeur = couleurs[Math.floor(Math.random() * couleurs.length)];
	var items = document.querySelectorAll('polygon, polyline, path, text')
	for (var i=0, nb=items.length; i<nb; i++) {
		items[i].setAttribute("fill", "#"+valeur);
	}
	//alert("coucou")
}