//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mes
	mes = document.getElementById("FormIngreso").value
	mes=prompt("Indica un mes")
	switch(mes)
	{
		case "enero":
		case "febrero":
			alert("Veranito!!")
		break
		case "marzo":
		case "abril":
		case "mayo":
		case "junio":
		case "julio":
		case "agosto":
		case "septiembre":
		case "octubre":
		case "noviembre":
		case "diciembre":
			alert("Extraño enero y febrero!")	
		break	

	}

}

