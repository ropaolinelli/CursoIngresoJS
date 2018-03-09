//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ventas;
	var max;
	var min;
	var primera=true;

	for(i=0 ; i<7 ; i++)
	{ventas=prompt("Ingrese las ventas")
	ventas=parseInt(ventas)

	while(ventas<0)
	{ventas=prompt("Ingrese las ventas correctamente")
	ventas=parseInt(ventas)}

	if(primera)
	{primera=false
	max=ventas
	min=ventas}

	else 
	{
		if(ventas>max)
		{max=ventas}
		else (ventas<min)
		{min=ventas}
	}

	}
alert("El mayor importe fue " + max + " y el menor importe fue " + min)
}

