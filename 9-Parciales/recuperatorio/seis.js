function Mostrar()
{
    var peso;
    var max;
    var min;
    var primera=true;

    for(i=0 ; i<3 ; i++)
    {  peso= prompt("Ingrese el peso")
        peso= parseInt(peso) 
    
        while(peso<0)
        {peso=prompt("Ingrese el peso correctamente")
        peso=parseInt(peso)}

        if(primera)
        { 
            primera=false
            max=peso
            min=peso
        }

        else
        {
            if (peso > max)
            {max=peso}
            else (peso < min)
            { min = peso}
        }
    
    
    }
alert("El peso maximo fue " + max + " y  el peso minimo fue " + min)
}
