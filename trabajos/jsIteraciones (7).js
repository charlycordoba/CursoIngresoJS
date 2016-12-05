function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";

while(respuesta=="si") 

{
  contador++;
 numero= prompt("ingresar numero");
 acumulador=acumulador + parseInt(numero);
 respuesta=prompt("desea continuar, si o no");


}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN