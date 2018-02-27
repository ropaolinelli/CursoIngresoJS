//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo
	var ancho
	var cuenta
	largo=document.getElementById("largo").value
	ancho=document.getElementById("ancho").value
	largo=parseInt(largo)
	ancho=parseInt(ancho)
	cuenta= (largo*2 + ancho*2) + 6
	alert("De alambre se necesitan " + cuenta)
}

