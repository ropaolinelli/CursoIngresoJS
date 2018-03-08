function Mostrar()
{
    
        var numeroUno
        var numeroDos
        var numeroTres
        var suma
        var promedio
        var cuenta
        numeroUno=document.getElementById("precioUno").value
        numeroDos=document.getElementById("precioDos").value
        numeroTres=document.getElementById("precioTres").value
        numeroUno=parseInt(numeroUno)
        numeroDos=parseInt(numeroDos)
        numeroTres=parseInt(numeroTres)
        suma= (numeroUno + numeroDos + numeroTres);
        promedio= suma/3
        alert("La suma de los precios es " + suma + " y el promdio es " + promedio)
     
}
