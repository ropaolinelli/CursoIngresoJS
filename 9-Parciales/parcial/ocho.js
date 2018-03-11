function Mostrar()
{
    var contador=0;
    var respuesta="continuar"
    var temperatura 
    var nombre
    var tempPAR=0
    var tempIMPA=0
    var tempMinima
    var tempMaxima
    var tempMaxNombre
    var tempMinNombre


    while (respuesta != "no")
    //Esta es la llave de while
    {   
        temperatura=prompt("Ingrese temperatura")
        temperatura=parseInt(temperatura)
        contador++

        while(temperatura<-100 || temperatura >100 || isNaN(temperatura))
        {
        temperatura=prompt("Ingrese temperatura")
        temperatura=parseInt(temperatura)
        }

        nombre=prompt("Ingrese su nombre")
        while (! isNaN(nombre))
        {
            nombre=prompt("Ingrese su nombre")
        }

        if (contador== 1 )
        {
            tempMinima= temperatura
            tempMinNombre= nombre
            tempMaxima= temperatura
            tempMaxNombre = nombre
        }

        else 
        {
            if ( temperatura < tempMinima )
            {
                tempMinima = temperatura
                tempMinNombre = nombre
            }

            if (temperatura > tempMaxima)
            {
                tempMaxima = temperatura
                tempMaxNombre = nombre
            }
        }

        if (temperatura % 2 == 0 && temperatura != 0)
        {
            tempPAR ++ 

        }
        else 
        {
            if (temperatura!= 0 )
            {
                tempIMPA++
            }
        }

         respuesta=prompt("Ingrese no para salir")
    }   

   alert("La temperatura maxima y el nombre del lugar es: " + tempMaxima + tempMaxNombre + " / La temperatura minima y el nombre del lugar es " + tempMinima + tempMinNombre + " / Hubo " + tempPAR + " pares y " + tempIMPA + " de imares" )
}
