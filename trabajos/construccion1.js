/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
function Rectangulo () 
{
var largodelterreno;
var Anchodelterreno;
var radiodelterreno;
var rectangulo;

largodelterreno=document.getElementById("Largo").value;
largodelterreno=parseInt(largodelterreno);

Anchodelterreno=document.getElementById("Ancho").value;
Anchodelterreno=parseInt(Anchodelterreno);

radiodelterreno=document.getElementById("Radio").value;
radiodelterreno=parseInt(radiodelterreno);
radiodelterreno=largodelterreno+Anchodelterreno;


rectangulo= radiodelterreno*2;
alert("El rectangulo de alambre es :" + rectangulo);






}
function Circulo () 
 
{
var largodelterreno;
var Anchodelterreno;
var radiodelterreno;
var rectangulo;
var circulodealambre;

largodelterreno=document.getElementById("Largo").value;
largodelterreno=parseInt(largodelterreno);

Anchodelterreno=document.getElementById("Ancho").value;
Anchodelterreno=parseInt(Anchodelterreno);

radiodelterreno=document.getElementById("Radio").value;
radiodelterreno=parseInt(radiodelterreno);
radiodelterreno=largodelterreno+Anchodelterreno;


rectangulo= radiodelterreno*2;

circulodealambre=rectangulo*3;

alert("El circulo de alambre es :" + circulodealambre);






}
	

function Materiales () 
{
	var largodelterreno;
var Anchodelterreno;
var radiodelterreno;
var rectangulo;
var circulodealambre;

var bolsasdecemento;
var bolsasdecal;

largodelterreno=document.getElementById("Largo").value;
largodelterreno=parseInt(largodelterreno);

Anchodelterreno=document.getElementById("Ancho").value;
Anchodelterreno=parseInt(Anchodelterreno);

radiodelterreno=document.getElementById("Radio").value;
radiodelterreno=parseInt(radiodelterreno);
radiodelterreno=largodelterreno+Anchodelterreno;


rectangulo= radiodelterreno*2;

circulodealambre=rectangulo*3;

bolsasdecemento=radiodelterreno*2;
alert("Bolsa de Cemento que se necesita: "+ bolsasdecemento);
bolsasdecal=radiodelterreno*3;
alert("Bolsas de cal que se necesita:" + bolsasdecal);


}
}