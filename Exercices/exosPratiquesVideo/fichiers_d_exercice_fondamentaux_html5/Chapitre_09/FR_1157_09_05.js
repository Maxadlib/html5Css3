var touches = {}
touches["9"] = "TAB"
touches["13"] = "ENTER"
touches["32"] = "ESPACE"
touches["37"] = "GAUCHE"
touches["38"] = "HAUT"
touches["39"] = "DROIT"
touches["40"] = "BAS"

//document.addEventListener("keydown", swappe);

function swappe(e) { 
	e.stopPropagation()
	e.preventDefault()
	if (touches[e.which] != undefined) {
		console.log(touches[e.which])
	}
}
