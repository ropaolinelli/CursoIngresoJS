function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta= true;
	var numero=prompt("ingrese numeros")
	
while (respuesta==true)
{
	contador++
	numero=parseInt(numero)
	acumulador+=numero;
	respuesta=parseInt(prompt)
}
if(isNaN(respuesta))

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN