function Mostrar()
{
    var mes
    mes=prompt("Ingrese un mes")
switch(mes)
{
    case "enero":
        alert("Comienza el año")
    break
    
    case "diciembre":
        alert("Se vienen las fiestas")
    break

    case "febrero":
    case "marzo":
    case "abril":
    case "mayo":
    case "junio":
    case "julio":
    case "agosto":
    case "septimbre":
    case "octubre":
    case "noviembre":
        alert("No es enero ni diciembre")
}
}
