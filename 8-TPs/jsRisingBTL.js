/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 var edad=document.getElementById("Edad").value
 var sexo=document.getElementById("Sexo").value
 var civil=document.getElementById("EstadoCivil").value
 var sueldo=document.getElementById("Sueldo"),value
 var legajo=document.getElementById("Legajo").value
 var nacionalidad=document.getElementById("Nacionalidad").value

//edad
    var edad
    edad=prompt("ingrese su edad")
    while(edad <18 || edad >90 ||isNaN(edad))
    {edad= prompt("Error.Ingrese su edad nuevamente")}
    document.getElementById("Edad").value=edad
   
 //sexo
    var sexo
    sexo=prompt("Ingrese su sexo")
     while(sexo != "f" && sexo != "m" || sexo==null)
    {sexo= prompt("Error. Ingrese su sexo nuevamente")}
    document.getElementById("Sexo").value=sexo

//civil
    var civil
    civil=prompt("Ingrese su estado civil")
    switch(civil)
    {
        case"1": 
        document.getElementById("EstadoCivil").value="Soltero"
        break
        case"2": 
        document.getElementById("EstadoCivil").value="Casado"
        break
        case"3":
        document.getElementById("EstadoCivil").value="Divorciado"
        break
        case"4":
        document.getElementById("EstadoCivil").value="Viudo"
        break
    }
//sueldo
    var sueldo
    sueldo=prompt("Ingrese su sueldo")
    while(sueldo<8000 || isNaN(sueldo))
    {sueldo=prompt("Error. Ingrese su sueldo nuevamente")}
    document.getElementById("Sueldo").value=sueldo

//Legajo
    var legajo
    legajo=prompt("Ingrese su legajo")
    while(legajo <1000 || legajo >9999 || isNaN(legajo))
    {legajo=prompt("Error. Ingrese su legajo nuevamente")}
    document.getElementById("Legajo").value=legajo

//Nacionalidad
    var nacionalidad
    nacionalidad=prompt("Ingrese su nacionalidad")
    switch(nacionalidad)
    {
        case"A": 
        document.getElementById("Nacionalidad").value="Argentino"
        break
        case"E":
        document.getElementById("Nacionalidad").value="Extranjero"
        break
        case"N":
        document.getElementById("Nacionalidad").value="Nacionalizados"
        break
    }


   
    


}
