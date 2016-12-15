function Mostrar()
{
	//no necesita porque se pisa .
  var numeroRandom;
  
  //necesitan inicializacion contadores y acumuladores.
  var interacciones=0;
  var contador1=0;
  var contador2=0;
  var contador3=0;
  var contador4=0;
  var contador5=0;
  var contador6=0;
  var contador7=0;
  var contador8=0;
  var contador9=0;
  var contador10=0;
  var total;
   var contpar=0;
   var contimpar=0;

while (interacciones<10000)

//for(interacciones=0;interacciones<10;interacciones++)
{
interacciones++;
  numeroRandom=Math.floor(Math.random()*10)+1;

	//alert(numeroRandom);
//console.log("Numero " + numeroRandom);

switch (numeroRandom)
{
	case 1:
	contador1++;
	break;

	case 2:
	contador2++;
	break;

	case 3:
	contador3++;
	break;

	case 4:
	contador4++;
	break;

	case 5:
	var porcentaje;

	total=contador1+contador2+contador3+contador4+contador5+contador6+contador7+contador8+contador9+contador10;
	porcentaje=contador5/total*100;

	if(porcentaje<7)
	{
		contador5++;
	}
	else
	{
		interacciones--;
		continue;
	}



	contador5++;
	break;

	case 6:
	contador6++;
	break;

	case 7:
	contador7++;
	break;

	case 8:
	contador8++;
	break;

	case 9:
	contador9++;
	break;

	case 10:
	contador10++;
	break;


}
 if(numeroRandom%2==0)
 {
 	contpar++;
 }
 else 
 {
 	contimpar++;
 }


}


total=contador1+contador2+contador3+contador4+contador5+contador6+contador7+contador8+contador9+contador10;
console.log("Total: " + total);

console.log("% contador de pares "+ (contpar/total*100));
console.log("% contador de impares "+ (contimpar/total*100));

console.log("El numero 1 se repite: " + contador1 + " Veces " + (contador1/total*100) + " %");
console.log("El numero 2 se repite: " + contador2 + " Veces " + (contador2/total*100) + " %");
console.log("El numero 3 se repite: " + contador3 + " Veces " + (contador3/total*100) + " %");
console.log("El numero 4 se repite: " + contador4 + " Veces " + (contador4/total*100) + " %");
console.log("El numero 5 se repite: " + contador5 + " Veces " + (contador5/total*100) + " %");
console.log("El numero 6 se repite: " + contador6 + " Veces " + (contador6/total*100) + " %");
console.log("El numero 7 se repite: " + contador7 + " Veces " + (contador7/total*100) + " %");
console.log("El numero 8 se repite: " + contador8 + " Veces " + (contador8/total*100) + " %");
console.log("El numero 9 se repite: " + contador9 + " Veces " + (contador9/total*100) + " %");
console.log("El numero 10 se repite: " + contador10 + " Veces " + (contador10/total*100) + " %");

}//FIN DE LA FUNCIÓN