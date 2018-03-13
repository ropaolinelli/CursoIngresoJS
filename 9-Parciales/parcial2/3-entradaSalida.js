//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var precio
	var descuento
	var precioDescuento
	var cuenta

	precio=document.getElementById("ancho").value
	descuento=document.getElementById("largo").value

	cuenta= (precio*descuento/100)
	precioDescuento= cuenta - precio
	alert(cuenta)

}

