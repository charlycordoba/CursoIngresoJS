
/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
  var Importe;
var RESULTADO;


  Importe=document.getElementById('importe').value;
  Importe=parseInt(Importe);


RESULTADO=Importe*25/100;

RESULTADO= document.getElementById("resultado").value=RESULTADO;
RESULTADO=parseInt(RESULTADO);






console.log(resultado);

alert("El descuento es del 25 %");


 


}

