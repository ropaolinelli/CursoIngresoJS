function Mostrar()
{
    var largo
    var ancho
    var cuenta
    largo=document.getElementById("alrgo").value
    ancho=document.getElementById("ancho").value
    cuenta= (largo*2 + ancho*2)*3
    alert("Para dar 3 hilos de alambre se necesitan " + cuenta)
}
