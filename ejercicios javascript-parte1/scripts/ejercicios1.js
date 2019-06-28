/* 1)

var nombre = prompt("Ingresa tu nombre:");
var apellido = prompt("Ingresa tu apellido:");
var edad = prompt("Ingresa tu edad");

if(Number.isInteger(edad))
{

	alert(nombre+' '+apellido+' '+edad);
}
else
{

	alert("Usted no ha ingresado una edad válida");
}
*/

 
/*   2)
 var nombre = prompt("Ingresa tu nombre:");
 var edad = prompt("Ingresa tu edad:");
 var genero = prompt("Ingresa tu sexo: 'm' o 'f'");

 if(genero=='m'|| edad>21)
 {

 	alert("Sea bienvenido");
 }
 else if(nombre=="María")
 {

 	alert("Bienvenida María");
 }
else
{

	alert("No puede ingresar");
}
*/



 /* 2)

var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

for(i=0;i<meses.length;i++)
{
	//alert(meses[i]);
	document.write(meses[i]+"  ");

}

*/


/*    //3) Con IF 


var num1 = prompt("Ingresa el primer valor");
var num2 = prompt("Ingresa el segundo valor");
var num3 = prompt("Ingresa el tercer valor");

if(num1>num2&&num1>num3)
{

	alert("El valor más alto es:"+num1);
}

else if(num2>num1&&num2>num3)
{
	alert("El valor más alto es:"+num2);

}
else if(num3>num1&&num3>num2)
{
	alert("El valor más alto es:"+num3);

}

*/


/*		//3) Con arrays
var numeros = [prompt("Ingrese el primer valor"),prompt("Ingrese el segundo valor"),prompt("Ingrese el tercer valor")];
var mayor = 0;

for(i=0;i<numeros.length;i++)
{
	
	if(numeros[i]>mayor)
	{

		var mayor = numeros[i];
	}
	

}

alert("El valor más alto es:"+mayor);
*/




/*	//4)

var numero = prompt("Ingrese un numero para saber si es divisible por 2");

if(numero%2 == 0)
{

		alert("El número"+" "+ numero +" "+"es divisible por 2");
}
else
{

	alert("El numero no es divisble por 2");
}
*/


/*  //5)

var numero = 8;
numero+=5;
document.write(numero);

*/


	//6)

/*var cadena1 = [1,2];
var cadena2 = [3,4];

document.write(cadena1.concat(cadena2));
*/

/*cadena1.push(cadena2[0]);
cadena1.push(cadena2[1]);

document.write(cadena1);
*/





// 7) SWITCH

/*La sentencia switch evalúa una expresión, 
comparando la expresión con un conjunto de  valores predefinidos, 
y ejecuta comandos según el caso.*/

/*Escribe un programa que pida al usuario el número del mes (un número entre 1 y 12) y que muestre el número de días que tiene ese mes. 
No tendremos en cuenta los años bisiestos. 
Si se introduce un número mayo que 12 o menor que 1, 
se mostrará un mensaje indicando al usuario que el mes elegido es incorrecto. */


/*var mes = prompt("Ingrese el numero del mes");

	switch (mes)
	{

		case "1":alert("El mes Enero tiene 31 dias");
		break;
		case "2":alert("El mes Febrero tiene 28 dias");
		break;
		case "3":alert("El mes Marzo tiene 31 dias");
		break;
		case "4":alert("El mes Abril tiene 30 dias");
		break;
		case "5":alert("El mes Mayo tiene 31 dias");
		break;
		case "6":alert("El mes Junio tiene 30 dias");
		break;
		case "7":alert("El mes Julio tiene 31 dias");
		break;
		case "8":alert("El mes Agosto tiene 31 dias");
		break;
		case "9":alert("El mes Septiembre tiene 30 dias");
		break;
		case "10":alert("El mes Octubre tiene 31 dias");
		break;
		case "11":alert("El mes Noviembre tiene 30 dias");
		break;
		case "12":alert("El mes Diciembre tiene 31 dias");
		break;

		//si la variable mes no contiene un número válido
		default:alert("El mes no es válido");
	}
*/



// DO-WHILE
/*Crea un bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa.
 La condición se evalúa después de ejecutar la sentencia,
 dando como resultado que la sentencia especificada se ejecute al menos una vez.*/


/*Realizar un programa que le solicite al usuario el ingreso de valores positivos,
 dichas medidas están comprendidas entre 1,5 y 10,5.
 Determinar e informar la medida promedio de todas las medidas ingresadas.
 El proceso finaliza con un valor de medida igual que -1.*/

/*
 
 var contador = 0;
 var acumulador = 0;
 var medida = 0;


 
	do{
 		
 		var medida = prompt("Ingrese una medida");
 		contador++;
 		acumulador+=medida;	
 	
 	}while((medida>1.5&&medida<10.5)||medida!=-1);


 	var promedio = acumulador/contador;
 	alert("El promedio es:"+promedio);

 	*/


/*   8)   


 	function suma(a,b)
 	{

 		var suma=a+b;
 		alert("La suma da:"+" "+suma);
 	}

 	function resta(a,b)
 	{
 		var resta=a-b;
 		alert("La resta da:"+" "+resta);

 	}

 	function division(a,b)
 	{
 		division=a/b;
 		alert("La division da:"+" "+division);

 	}

 	function multiplicacion(a,b)
 	{
 		multip=a*b;
 		alert("La multiplicacion da:"+" "+multip);

 	}

 	var num1=parseInt(prompt("Ingrese el primer numero"));
 	var num2=parseInt(prompt("Ingrese el segundo numero"));
 	var calculadora= prompt("Ingrese la operacion que desea realizar");

 	switch(calculadora)
 	{
 		case "suma":
 					suma(parseInt(prompt("Ingrese el primer numero")),parseInt(prompt("Ingrese el segundo numero")));
 		break;

 		case "resta":
 					resta(parseInt(prompt("Ingrese el primer numero")),parseInt(prompt("Ingrese el segundo numero")));
 		break;

 		case "division":
 						division(parseInt(prompt("Ingrese el primer numero")),parseInt(prompt("Ingrese el segundo numero")));
 		break;
 		
 		case "multiplicacion":
 								multiplicacion(parseInt(prompt("Ingrese el primer numero")),parseInt(prompt("Ingrese el segundo numero")));				
 		break;

 		default:
 				alert("La operación ingresada no es válida");

 	}
 


*/


/*  9)


function ingvec(vector)
{

for(i=0;i<10;i++)
{
	numeros.push(parseInt(prompt("Ingrese un numero")));
	
}

document.write(numeros+"<br>");

}

var numeros=[];
ingvec(numeros);

*/



/*  10)

function resto(num)
{
	if(num%2==0)
	{
		alert("El numero es par");
	}
	else
	{
		alert("El numero es impar");
	}

}

var numero=parseInt(prompt("Ingrese un numero para saber si es par o no"));
resto(numero);
*/
