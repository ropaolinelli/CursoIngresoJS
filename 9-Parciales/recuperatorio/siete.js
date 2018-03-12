function Mostrar()
{
    var edad
    var sexo
    var respuesta
    var contador=0
    var min=0
    var totalEdad=0
    var max=20
    var primera=true
    var edadVarones=0

    while(respuesta != "no")
    {
        edad=prompt("Ingrese su edad")
        edad=parseInt(edad)
        contador++

        while(edad < 0 || edad >100 || isNaN(edad))
        {
            edad=prompt("Error. Ingrese edad valida")
            edad=parseInt(edad)
        }

        sexo=prompt("Ingrese su sexo")
        
        while(sexo != "f" && sexo != "m")
        {
            sexo=prompt("Error. Ingrese un sexo valido")
        }

        totalEdad= edad + totalEdad

        if (primera)
        {
            primera=false
            min=edad
            max=edad
        }
        else
        {
            if(edad < min)
            {
                min= edad
            }

            if(edad > max)
            {
                max= edad
            }
        }

        if(sexo== "m" && edad >= 20)
        {
            edadVarones++
        }
        respuesta=prompt("Ingrese no para salir")
    }
alert("El promedio de edad es " + totalEdad/contador)
alert("La edad mas baja es " + min)
alert("La cantidad de varones cuya nota sea mayor o igual a 20 es " + edadVarones )
}
