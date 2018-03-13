//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero
	var par=0
	var promedio=0
	var contador=0
	var max=0
	var min=0
	var primera=true
	var respuesta
	var acumulador= 0

	while(respuesta != "no")
	{
		numero=prompt("Ingrese un numero positivo")
		numero=parseInt(numero)
		contador++

		while( isNaN(numero) || numero < 0 || numero==null)
			{
				numero=prompt("Error. Ingrese un numero positivo valido")
				numero=parseInt(numero)
			}

		contador++
		acumulador= acumulador + numero

		if(numero % 2 == 0)
		{
			par++
		}

		if(primera)
		{
			primera=false
			max= numero
			min= numero
		}

		else
		{
			if (numero < min)
			{
				min = numero
			}

			if (numero > max)
			{
				max = numero
			}
		}
		promedio=acumulador/contador
		respuesta=prompt("Ingrese no para salir")
	}
alert("La cantidad de numeros pares es " + par)
alert("El promedio es " + promedio)
alert("La suma de todos los numeros es " + acumulador)
alert("El numero maximo es " + max + " y el numero minimo es " + min)
}

