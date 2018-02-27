//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota
	var contvarones=0
	var min
	var contador=0
	var acumulador=0
	var sexo
nota=prompt("Ingrese la nota")
while(nota <=0 || nota >10)
	{ nota=prompt("Ingrese la nota")
		nota=parseInt(nota) }
contador++
acumulador+=nota
acumulador/contador

if(contador==1)
{min=nota}
else
{
	if(nota<min)
	{min=nota}
}
if(sexo=="m" && nota<6)
{contvarones++;}

}

