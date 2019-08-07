// JavaScript Document
function gere(arg){
	var element = document.getElementById(arg)
	var etat = element.getAttribute('visibility')
	element.setAttribute('visibility',(etat=='visible' || etat==null)?'hidden':'visible')
}