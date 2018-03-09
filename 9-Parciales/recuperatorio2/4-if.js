//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero1;
	var numero2;
	var cuenta;
	numero1=prompt("Ingrese un numero")
	numero2=prompt("ingrese otro numero")
	numero1=parseInt(numero1)
	numero2=parseInt(numero2)

	if(numero1 == numero2)
	{cuenta= (numero1 * numero2)
	document.write("El resultado es " + cuenta); }

	if(numero1 > numero2)
	{ cuenta=(numero1 - numero2)
	document.write("La resta es " + cuenta); }

	if(numero1 < numero2)
	{ cuenta= (numero1 + numero2)
	document.write("La suma es " + cuenta); }

	
}

