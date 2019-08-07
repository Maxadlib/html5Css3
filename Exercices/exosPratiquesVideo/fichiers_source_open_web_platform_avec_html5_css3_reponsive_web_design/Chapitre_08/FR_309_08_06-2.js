var canvas
var ctx
var angle = 0

window.onload = function(){
	canvas = document.getElementById('cadre');
	canvas.width = 600;
	canvas.height = 600;
	ctx = canvas.getContext('2d');

	setInterval(traceUI, 30)
}
function traceUI(){
	// Nettoyage
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.lineWidth = 1
	// tracé du cercle
	ctx.beginPath()
	ctx.fillStyle = 'rgba(178,178,0,0.13)'
	ctx.strokeStyle = '#B2B200'
	ctx.arc(300, 300, 200, 0, Math.PI * 2, false)
	ctx.stroke()
	ctx.fill()
	
	// mise en place des axes X et Y
	
	ctx.beginPath()
	ctx.strokeStyle = 'rgba(100,100,100,.25)'
	ctx.moveTo(100, 300)
	ctx.lineTo(500, 300)
	ctx.moveTo(300, 100)
	ctx.lineTo(300, 500)
	ctx.closePath()
	ctx.stroke()
	
	// rayon tournant
	var cosinus = Math.cos(Math.PI * 2 - angle)
	var sinus = Math.sin(Math.PI * 2 - angle)
	var x = 300 + (cosinus * 200) 
	var y = 300 + (sinus * 200) 
	ctx.lineWidth = 2
	ctx.beginPath()
	ctx.strokeStyle = 'rgba(102,102,0,0.67)'
	ctx.moveTo(300, 300)
	ctx.lineTo(x, y)
	ctx.closePath()
	ctx.stroke()
	
	// tracer cosinus et sinus
	ctx.lineWidth = 1
	ctx.strokeStyle = 'rgba(140,0,0,0.72)'
	// cosinus
	ctx.beginPath()
	ctx.moveTo(300, 300)
	ctx.lineTo(x, 300)
	ctx.closePath()
	ctx.stroke()
	// sinus
	ctx.beginPath()
	ctx.moveTo(300, 300)
	ctx.lineTo(300, y)
	ctx.closePath()
	ctx.stroke()
	
	// reperes cosinus sinus
	ctx.strokeStyle = 'rgba(100,100,100,.25)'
	// cosinus
	ctx.beginPath()
	ctx.moveTo(x, y)
	ctx.lineTo(x, 300)
	ctx.closePath()
	ctx.stroke()
	// sinus
	ctx.beginPath()
	ctx.moveTo(x, y)
	ctx.lineTo(300, y)
	ctx.closePath()
	ctx.stroke()
	
	// tracé angle 
	ctx.beginPath()
	ctx.lineWidth = 4
	ctx.strokeStyle = 'rgba(115,150,255,0.78)'
	ctx.arc(300, 300, 200, 0,( Math.PI * 2 - angle), true)
	ctx.stroke()
	
	// ajout des infos
	ctx.font = "0.4em Verdana";
	
	ctx.fillStyle = "rgb(114,132,61)"
	ctx.fillText("cos " + Math.round(cosinus * 100)/100, x,310);
	ctx.fillText("sin " + Math.round(sinus * 100)/100, 250,y);
	var rad = 360 - Math.round((Math.PI * 2 - angle) * 180 / Math.PI)
	
	
	var delta
	if (angle < (1.5 * Math.PI ) && angle > Math.PI/2) {
		delta = 40
	} else {
		delta = 10
	}
	var x1 = x + (delta*cosinus)
	var y1 = y + (20*sinus)
	ctx.fillText(rad + "°", x1 , y1);
	
	// augmenter l'angle
	angle += 0.01
	if (angle >= Math.PI * 2) {
		angle = 0
	}
}