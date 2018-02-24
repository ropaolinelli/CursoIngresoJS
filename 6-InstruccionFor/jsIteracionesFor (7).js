function Mostrar()
{
    var rep =prompt("Ingrese un numero");
    var divisores=0; 
    for(num=1 ;num < rep ; num++)
    { 
        if( rep % num == 0)
       console.log(num) 
        divisores++
    
    }



}//FIN DE LA FUNCIÓN