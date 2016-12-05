function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(sexo!="M" && sexo!="F")
{
sexo= prompt(" Re ingrese sexo");
}


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN