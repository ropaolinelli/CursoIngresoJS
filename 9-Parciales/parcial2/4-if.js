//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno
	var numeroDos
	var cuenta
	var mensaje

	numeroUno=prompt("Ingrese un numero")
	numeroDos=prompt("Ingrese otro numero")
	numeroUno=parseInt(numeroUno)
	numeroDos=parseInt(numeroDos)

	if(numeroUno ==  numeroDos)
	{
		mensaje=("El resultado concatenado es " + numeroUno + numeroDos)
	}
	
	else
	{
		if(numeroUno > numeroDos)
		{
			cuenta=numeroUno - numeroDos
			mensaje=("La resta es " + cuenta)
		}

		else
		{
			cuenta= numeroUno + numeroDos
			mensaje=("La suma es " + cuenta)
		}
	}


	alert(mensaje)
}

