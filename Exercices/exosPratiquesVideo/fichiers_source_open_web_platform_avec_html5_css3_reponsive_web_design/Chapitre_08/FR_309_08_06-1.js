var canvas
var ctx
var angle = 0

window.onload = function(){
	canvas = document.getElementById('cadre');
	canvas.width = 600;
	canvas.height = 600;
	ctx = canvas.getContext('2d');

	setInterval(traceUI,30)
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
	var x =  300 + (Math.cos(Math.PI *2 - angle) * 200)
	var y =  300 + (Math.sin(Math.PI *2 - angle) * 200)
	ctx.lineWidth = 3
	ctx.beginPath()
	ctx.strokeStyle = 'rgba(102,102,0,0.67)'
	ctx.moveTo(300, 300)
	ctx.lineTo(x, y)
	ctx.closePath()
	ctx.stroke()
	
	
	// augmenter l'angle
	angle += 0.01
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}