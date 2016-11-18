/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
/*var porcentaje;
var Precio=100;
var aumento;
var preciofinal;

aumento= Precio*0.21;
preciofinal= Precio* 1.21;

preciofinal= Precio*1.21; */

var porcentaje;
var sueldo;
var aumento;
var aumentofinal;

sueldo= document.getElementById('sueldo').value;
sueldo= parseInt(sueldo);

aumento= document.getElementById('resultado').value;
aumento= parseInt(aumento);

aumento= sueldo*0.10;
aumentofinal= sueldo+aumento;

aumentofinal= document.getElementById('resultado').value =aumentofinal;









	
}
