function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
var respuesta="si";

 while(respuesta=="si")
 {
 	contador++;
 	numero=prompt("Ingrese numero");
 	numero=parseInt(numero);

 	if (numero<0)
 	{
 		negativo= negativo* numero;
 	}
 	else 
 	{
 		positivo=positivo+numero;
 	}
respuesta= prompt("desea continuar, si o no");
 }

	var respuesta='si';


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN