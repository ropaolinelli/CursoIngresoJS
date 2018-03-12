//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota
	var sexo
	var promedio=0
	var min=0
	var max=6
	var notaVarones
	var contador=0
	var totalNota=0
	var primera=true
	var notaVarones=0

	for(var i=1;i<=6;i++)
	{
		nota=prompt("Ingrese su nota")
		nota=parseInt(nota)
		contador++

		while(nota < 0 || nota > 10 || isNaN(nota))
		{
			nota=prompt("Error. Ingrese nota valida")
			nota=parseInt(nota)
		}

		sexo=prompt("Ingrese su sexo")

		while(sexo!= "f" && sexo != "m")
		{
			sexo=prompt("Error. Ingrese sexo valido")
		}

		totalNota= nota + totalNota

		if(primera)
		{
			primera=false
			max=nota
			min=nota
		}
		
		else
		{
			if(nota < min)
			{
				min=nota
			}

			if(nota > max)
			{
				max=nota
			}
		}

		if(nota >= 6 && sexo == "m")
		{
			notaVarones++
		}
	
	}
alert("El promedio de las notas es " + totalNota/contador)
alert("La nota mas baja es " + min)
alert("La cantidad de varones cuya nota es mayor o igual a 6 es " + notaVarones)
}

