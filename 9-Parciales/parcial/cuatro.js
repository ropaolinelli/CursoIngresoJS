function Mostrar()
{
    var numeroUno=parseInt(numeroUno)
    var numeroDos=parseInt(numeroDos)
    var cuenta
    numeroUno=prompt("Ingrese un numero")
    numeroDos=prompt("Ingrese otro numero")
if(numeroUno == numeroDos)
    {cuenta= numeroUno*numeroDos
    document.write("El resultado es " + cuenta)}
if(numeroUno > numeroDos)
    {cuenta= numeroUno - numeroDos
    document.write("La resta es " + cuenta)}
if(numeroUno < numeroDos)
    {cuenta= numeroUno + numeroDos
    document.write("La suma es " + cuenta)}

}
