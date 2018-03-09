//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo 
	var ancho
	var total
	ancho=document.getElementById("ancho").value
	largo=document.getElementById("largo").value
	largo=parseInt(largo)
	ancho=parseInt(ancho)
	total=(largo*2 + ancho*2) + 6
	alert("Para colocar 6 hilos de alamabrado se necesitan " + total)

}

