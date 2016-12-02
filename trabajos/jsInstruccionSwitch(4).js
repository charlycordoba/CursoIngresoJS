function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño)
{
	case "Agosto":
	case"Enero":
	case "Octubre":
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Diciembre":
	alert(" Tienen 31 dias");
	break;

	case "septiembre":
	case "Noviembre":
    case "Abril":
	case "Junio":
	 aler("Tienen 30 Dias");
	 break;

	 case "Febrero":
      alert("Este mes es el unico que posee 28 dias");
	 break;



}



//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN