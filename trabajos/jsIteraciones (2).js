function Mostrar()
{
    var contador;
    contador=10;

    document.write("<h> Contador </h>");



    while(contador>0)
    {
      contador--; 
      document.write(" <br>Numero de contador" + contador);
    }
    document.write("<p> Fin </p>");
//alert('iteración while');


}//FIN DE LA FUNCIÓN