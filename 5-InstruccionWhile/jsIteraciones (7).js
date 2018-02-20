function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta= "si", mensaje
	var mensajeOk="ingrese un numero o cancelar para salir"
	var mensajeError="Error"
	mensaje=mensajeOk
	
while (true)
{
	respuesta= prompt(mensaje);
	mensaje=mensajeOk
	if(respuesta == null) break;
	respuesta=parseInt(respuesta);
	if(isNaN(respuesta));
	{mensaje=mensajeError;
		continue; }
acumulador+=respuesta;
contador++;		
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN