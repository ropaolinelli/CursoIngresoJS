function Mostrar()
{
    var contador=0;
    var respuesta=true;
    var notas;
    var sexo;
    var totalNotas=0;
    var min=10;
    var max=6;
    var notaVarones=0;
    var promedio;

    while(respuesta!= "no")
    {   
        notas=prompt("Ingrese notas del alumno");
        notas=parseInt(notas);
        contador++;

        while(notas <0 || notas >10 || isNaN(notas))
        {
            notas=prompt("Ingrese nota valida");
            notas=parseInt(notas);
        }

        sexo= prompt("Ingrese sexo del alumno")
        while (sexo != "f" && sexo != "m")
        {
           sexo= prompt("Ingrese un sexo valido")
        }

        totalNotas= notas + totalNotas;

        if(notas < min)
        {
            min = notas
        }

        if( sexo == "m" && notas >= 6)
        {
            notaVarones++
        }

        respuesta=prompt("Ingrese no para salir")
    }
alert(" Promedio de notas totales " + totalNotas/contador)
alert("La nota mas baja es " + min)
alert("La cantidad de varones cuya nota es mayor o igual a 6 es " + notaVarones)
}
