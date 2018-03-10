function Mostrar()
{
    var hora
    var respuesta
    hora=prompt("Ingrese una hora")
switch(hora)
{
    case "12":
    case "13":
    case "14":
    case "15":
    case "16":
    case "17":
    case "18":
    case "19":
    case "20":
        alert("Tarde de mate")
    break

    case "21":
    case "22":
    case "23":
    case "24":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
        alert("Es de noche")
    break

    case "7":
    case "8":
    case "9":
    case "10":
    case "11":
    case "12": 
        alert("Es de mañana")
    break

    default:
    alert("Numero invalido")

}

   
    
}
