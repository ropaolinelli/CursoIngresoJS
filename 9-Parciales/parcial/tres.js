function Mostrar()
{
    var precio
    var porcentaje
    var precioporcentaje
    var cuenta
    var iva
    var precioconIva

    precio=document.getElementById("alrgo").value
    porcentaje=document.getElementById("ancho").value
    precio=parseInt(precio)
    porcentaje=parseInt(porcentaje)

    cuenta= (precio*porcentaje)/100
    precioporcentaje= precio - cuenta
    iva= precioporcentaje*0.21
    precioconIva= precioporcentaje + iva
    alert(cuenta)
    alert(precioconIva)
}
