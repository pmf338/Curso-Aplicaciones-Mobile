/* //1)

var edad= parseInt(prompt("Ingrese su edad"));
dias(edad);

function dias(edad)
{
	dias=edad*365;
	alert("La cantidad de dias son:"+" "+dias);

}
*/

	
	
	/* //2)
	
	var a=Boolean(6 > 9); //false
	var b=Boolean(6 < 3); //true
	var c=Boolean(6 > = 6); //true
	var d=Boolean(6 < = 6); // true
	var e=Boolean(6 === 6); //true
	var f=Boolean(6! == 6); //true
	var g=Boolean(6 === "6"); //false
	var h=Boolean(6 == "6");//true */ 



/*  //3)
var invitacion =prompt("¿Te mandaron invitacion para algún evento?");

if(invitacion=="si")
{
	var invitaciones= parseInt(prompt("¿Cuántas invitaciones te mandaron?"));
	var extra= prompt("¿Darán algún 'souvenir' o 'comida'?");

	if(extra=="souvenir"||extra=="comida")
	{
		alert("Iras al evento emocionado");
	}
		else if(invitaciones==4)
		{
			alert("Iras a todos los eventos sólo para cumplir y terminarás cansado");
		}	
		else
		{
			alert("Rechazarás las invitaciones amablemente");
		}

}

alert("Te pedis una pizza y te quedas en tu casa viendo Netflix");
*/




/*  //4)


var sentimiento=prompt("¿Estás triste?");

if(sentimiento=="si")
{
console.log("No estés triste");	
}
*/


/*  //5)


var numsecreto=5;
var numero=parseInt(prompt("¿Cuál es el número secreto?"));

if(numero!=numsecreto)
{
	alert("Reportado lince, despedite de tu cuenta");

}
*/



/* //6)


var contraseña=123;
var contraing=parseInt(prompt("Ingrese la contraseña"));

if(contraing==contraseña)
{
	alert("Bienvenido usuario");

}
else{

	window.location="http://www.comunidadit.org/"
}
*/



/*  //7)

var dias=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
var dia=prompt("Ingrese un dia de la semana");
var i=0;


	while((dias.indexOf(dia)!=-1)) 
	{
		if(dias.indexOf(dia)==dias.length-1)
		{
			alert(dias[dias.indexOf(dia)-(dias.length-1)]);
		}
		else
		{
			alert(dias[dias.indexOf(dia)+1]); //dias.indexOf= me da la posicion en el array del elemento que estoy buscando,sino existe me devuelve -1

		}

		var dia=prompt("Ingrese un dia de la semana");
		
	}
*/


/*  //8)

document.write("Que los cumplas feliz,"+"<br>"+"que los cumplas feliz,"+"<br>"+"que los cumplas"+" "+prompt("Ingrese el nombre del cumpleañero")+"<br>"+"que los cumplas feliz.");

*/



/*  //9)



	Math  // Math es un objeto incorporado que tiene propiedades y métodos para constantes y funciones matemáticas. No es un objeto de función.
	Math.PI //Número Pi
	Math.E //Constante de Euler, la base de los logaritmos naturales
	Math.pow(10, 2) //Potencia de un número
	Math.random() //retorna un punto flotante, un número pseudo-aleatorio dentro del rango [0, 1).
	Math.round(6.3) //retorna el valor de un número redondeado al entero más cercano.
	Math.floor(8.4) //Devuelve el máximo entero menor o igual a un número.
	Math.ceil(8.4) //devuelve el entero más pequeño mayor o igual a un número dado.
	Math.ceil( Math.random() * 10 ) 
	Math.floor( Math.random() * 10 )

*/


/*	10)


alert("Piedra,papel o tijera");



var jugador1=prompt("¿Piedra,papel o tijera?");
var jugador2=Math.random(); //el otro jugador elige al azar y según que salga sera piedra, papel o tijera y compararlo con lo que haya elegido el jugador 1



*/
					
	
			 

