//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var letra
	var numero
	var respuesta
	var contador=0
	var par=0
	var impar=0
	var cero=0
	var totalNumero=0
	var min
	var max
	var minLetra
	var maxLetra
	var acumulador=0
	var sumaNeg=0


	while(respuesta != "no")
	{
		letra=prompt("Ingrese una letra")

		while(!isNaN(letra))
		{
			letra=prompt("Error. Ingrese una letra valida")
		}

		numero=prompt("Ingrese un numero entre -100 y 100")
		numero=parseInt(numero)
		contador++

		while(numero  < -100 || numero > 100 || isNaN(numero))
		{
			numero=prompt("Error. Ingrese un numero valido")
		}

		if(numero % 2 == 0)
		{
			par++
		}

		else
		{
			impar++
		}

		if(numero == 0)
		{
			cero++
		}

		if(contador == 1)
		{
			min=numero
			minLetra=letra
			max=numero
			maxLetra=letra
		}
		
		else
		{
			if(numero < min)
			{
				min=numero
				minLetra=letra
			}
			if(numero > max)
			{
				max=numero
				maxLetra=letra
			}
		}
		
		contador++
		acumulador= acumulador + numero
		
		if(acumulador < 0)
		{	
			contador
			sumaNeg= sumaNeg + numero
		}



		respuesta=prompt("Ingrese no para salir")
	}
document.write("La cantidad de numeros pares son " + par + 
"La cantidad de numeros impares son " + impar +
"La cantidad de ceros son " + cero +
"El numero y letra minimos son " + min + minLetra + 
"El numero y letra maximos son " + max + maxLetra + 
"La suma de numeros negativos es suma " + sumaNeg)

}

