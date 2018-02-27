//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe
	var final
	var cuenta
	importe=prompt("Ingrese importe del producto")
	final=document.getElementById("importe").value= importe * 0.21
	importe=parseInt(importe)
	final=parseInt(final)
	cuenta=importe + final
	document.getElementById("importe").value=cuenta
}

