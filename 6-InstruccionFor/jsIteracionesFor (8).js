function Mostrar()
{
    var numero =prompt("Ingrese un numero");
    var contador= 0
    
    for(I=2 ; I<numero ; I++)
    { 
        if( numero % I == 0)
      {contador++ } 
    }

     if(contador>=3)
     {
         alert("NO es primo")
     }
    else
    {
        alert("Es primo")
    }


}//FIN DE LA FUNCIÓN