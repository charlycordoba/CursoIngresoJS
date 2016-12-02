function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

switch (mesDelAño) 
{
	case "Julio":
	case "Agosto":

alert("Abrigate que hace frio" + mesDelAño);
break;


case "Enero":
case "Febrero":
case "Marzo":
case "Abril":
case "Mayo":

alert("Falta para el invierno");
break;

default:
 
 aler("Ya paso el Frio");

}


}//FIN DE LA FUNCIÓN