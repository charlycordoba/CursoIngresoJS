/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
  var Importe;
var Descuento;
var resultado;

  Importe=document.getElementById('importe').value;
  Importe=parseInt(Importe);

resultado=document.getElementById("resultado").value;
resultado=parseInt(resultado);

resultado=Importe*25/100;

alert("El descuento es del 25 %");


 


}
