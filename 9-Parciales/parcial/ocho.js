function Mostrar()
{
    var contador=0;
    var respuesta="continuar"
    var temperatura
    var nombre

    while (respuesta != "no")//Esta es la llave de while
    {
        temperatura=prompt("Ingrese temperatura")
        temperatura=parseInt(temperatura)
        while(temperatura<-100 || temperatura >100 || isNaN(temperatura))
        {
        temperatura=prompt("Ingrese temperatura")
        temperatura=parseInt(temperatura)
        }
        while (! isNaN(nombre))
        {
            nombre=prompt("Ingrese su nombre")
        }


    }   
    respuesta=prompt("Ingrese no para salir")
}
