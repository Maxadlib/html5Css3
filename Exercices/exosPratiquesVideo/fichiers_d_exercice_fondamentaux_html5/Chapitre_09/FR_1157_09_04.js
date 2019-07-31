window.onload = init

function init() {
	var terme = document.querySelector('#terme');
	
	//console.log(terme)
	terme.addEventListener('click', checkARIA);
	terme.addEventListener('keyup', checkARIA);
}
function checkARIA(e) {
	this.setAttribute("aria-checked", this.checked);
}