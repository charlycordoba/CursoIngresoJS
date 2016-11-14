/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{ /* funciones paso 1 */

	var nombre = "charly";
	var apellido = "Arias";
	var miVariable;
	
	miVariable=document.getElementById("elNombre");			

	nombre = prompt(" Ingrese su nombre" , "NN");

	alert ("Mi nombre es " + nombre  + " y su apellido es: " + apellido);
 alert (miVariable);
	
}

