function Mostrar()
{

	var contador=0;
	var minimo;
	var maximo;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		
	contador++;
 	numero=prompt("Ingrese numero");
 	numero=parseInt(numero);

 	if(contador==1)
 	{
       maximo=numero;
       minimo=numero;
 	}
 	else {

 	if(numero<minimo)
 	{
        minimo=numero;

 	}
 	if(numero>maximo)
 	{
      maximo=numero;
 	}
 }
respuesta=prompt("desea continuar, si o no");
	}
	document.getElementById('maximo').value= maximo;
	document.getElementById("minimo"). value= minimo;




}//FIN DE LA FUNCIÓN