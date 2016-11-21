function Mostrar()
{
//tomo la edad  

var Edad;

Edad=document.getElementById('edad').value;

if(Edad>18)
{
	alert("es mayor");
}

if (Edad<13)
	{ 
		alert("Es menor de edad");
	}

	if (Edad>18 || Edad<13)
	{ alert("Es adolescente");
		
	}


}//FIN DE LA FUNCIÓN