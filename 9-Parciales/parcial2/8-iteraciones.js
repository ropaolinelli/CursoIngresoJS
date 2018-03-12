//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero
	var par=0
	var contador= 0
	var acumulador= 0
	var primera=true
	var min=0
	var max=0
	var promedio=0
	var respuesta

	while(respuesta!="no")
	{
		numero=prompt("Ingrese numeros positivos")
		numero=parseInt(numero)

		while( isNaN(numero) || numero < 0 || numero==null)
		{
			numero=prompt("Error. Ingrese numero valido")
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
			max=numero
			min=numero
		}
		
		else 
		{
			if(numero > max)
			{
				max= numero
			}
			else
			{
				if(numero<min)
				{
				min=numero
				}
			}
			
		}

	promedio=acumulador/contador
	respuesta=prompt("Ingrese no para salir")

	}
	alert("a) La cantidad de numeros pares es " + par + 
	" / b) El promedio de todos los numeros es " + promedio + 
	" / c) la suma de todos los numeros es " + acumulador + 
	" / d) El numero maximo es " + max + " y el minimo es " + min)
}

