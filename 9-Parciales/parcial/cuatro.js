function Mostrar()
{
    var numeroUno=parseInt(numeroUno)
    var numeroDos=parseInt(numeroDos)
    var cuenta
    var mensaje

    numeroUno=prompt("Ingrese un numero")
    numeroDos=prompt("Ingrese otro numero")

if(numeroUno == numeroDos)
    {cuenta= numeroUno+numeroDos
    mensaje= ("El resultado es " + cuenta)}
else 
{   if(numeroUno > numeroDos)
    {cuenta= numeroUno - numeroDos
    mensaje=("La resta es " + cuenta)}
    else 
    {cuenta= (numeroUno * numeroDos);
    mensaje=("La suma es " + cuenta)}

}
document.write(mensaje)
}
