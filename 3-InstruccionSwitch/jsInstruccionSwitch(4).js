function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
switch (mesDelAño)
{
    case "Febrero":
        alert("Tiene 28 dias")
    break
    case "Enero":
    case "Marzo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
    case "Mayo":
        alert("tiene 31 dias")
    break

    default:
        alert("tiene 30 dias")
    break
}
	



}//FIN DE LA FUNCIÓN