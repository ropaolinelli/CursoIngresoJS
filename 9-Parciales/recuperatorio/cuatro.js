function Mostrar()
{
    var numeroUno
    var numeroDos
    var suma
    numeroUno=prompt("Ingrese un numero")
    numeroDos=prompt("Ingrese otro numero")
    suma= (numeroUno + numeroDos);
if(suma == 0)
    {document.write("El resultado es 0")}
if(suma>0)
{document.write("El resultado es positivo")}
else
{document.write("El resultado es negativo")}
}
