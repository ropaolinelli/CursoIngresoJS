function Mostrar()
{
    var sexo;
    var nota;

    for (i = 0 ; i < 5; i ++)
    {
    sexo=prompt("Ingrese su sexo");
    nota=prompt("Ingrese sus notas");

        while (sexo != "f" && sexo!= "m" && sexo!=null )
    {
      sexo=prompt("Error. ingrese su sexo correctamente")
    }

        while(nota <0 || nota >= 10 )
    { 
        nota=prompt("Error. Ingrese una nota valida")
    }
    } 
}

