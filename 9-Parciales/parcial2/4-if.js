//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero1
	var numero2
	numero1=prompt("Ingrese un numero")
	numero2=prompt("ingrese otro numero")
	numero1=parseInt(numero1)
	numero2=parseInt(numero2)
	
	if(numero1 == numero2)
	{document.write("El resultado es " + numero1*numero2)}

	else
	{
		if(numero1 > numero2)
		{document.write(" La resta es "+ (numero1-numero2))}

		else
		{document.write("La suma es "+ (numero1 + numero2))}
	}
	
	
	
}

