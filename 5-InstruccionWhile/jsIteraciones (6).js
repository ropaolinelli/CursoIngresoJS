function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero=
numero=prompt("ingrese 5 números")
while (contador < 5)
	{
		contador++;
		numero=parseInt(numero)
		acumulador+=numero;
	}
numero= acumulador/contador


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN