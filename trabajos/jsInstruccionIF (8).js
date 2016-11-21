function Mostrar()
{
//tomo la edad  

	var Edad;
	var EstadoCivil;

	Edad=document.getElementById('edad').value;
	EstadoCivil=document.getElementById('estadoCivil').value;

	if(Edad>18 && EstadoCivil!="Soltero")
	{ 
		alert("No hace nada");

	}
	else
	{

		alert("Es soltero y no es menor");

	}


}//FIN DE LA FUNCIÓN