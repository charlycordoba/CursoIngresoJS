/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 contadorIntentos=0;
	 //numeroSecreto=Math.floor((Math.random()100*)+1);
	

}

function verificar()
{
	var numeroIngresado;

	contadorIntentos= contadorIntentos+1;
console.log("el contador: " + contadorIntentos);	
	document.getElementById('intentos').value=contadorIntentos;
	numeroIngresado=document.getElementById("numero").value;

	if(numeroIngresado=numeroSecreto)
	    {

       alert("Gano");
       switch(contadorIntentos)
       {
        case 1:
        case 2:

        alert("Usted es psiquico"+ contadorIntentos);
        break;

        case 3:
        case 4:
        alert("excelente percepcion" + contadorIntentos);
        break;
 
         default :
       alert("Afortunado en el amor");
       }

       }

       //switch (contadorIntentos)
    //{
       // case 1:
       // case 2:

       // alert("Usted es psiquico" + contadorIntentos);
       // break;

        //case 8:
       // case 9:
        //alert("Excelente percepcion" + contadorIntentos);
        //break;

    //}

    }
}