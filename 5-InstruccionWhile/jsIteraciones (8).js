function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var numero
while(respuesta == "si")
	{
		numero= prompt("Ingrese un numero positivo")
		numero=parseInt(numero)

while(isNaN(numero))
		{
			numero= prompt("Ingrese un numero negativo")
			numero= parseInt(numero)
		}
	contador++;
if(numero >0)
	{ positivo +=numero}
else
if(numero!=0)
	{ negativo*=numero }
else 
{contador--;}
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN