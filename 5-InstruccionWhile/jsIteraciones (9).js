function Mostrar()
{// declarar variables
	var contador=0;
	var min=0; 
	var num;
	var respuesta; 
	var max=-1000;
	var primera=true;

while(respuesta=="si")
	{	contador++;
		num=prompt("Max");
		num=parseInt(num)	}
		
while(isNaN(num))
	{	num=prompt("Min");
		num=parseInt(num);	}
if(primera)
	{ 	primera=false
		max=num;
		min=num;	}	
	
}//FIN DE LA FUNCIÓN