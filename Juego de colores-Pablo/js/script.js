var numColores = 6;
var color = llenarColores();
var colorSele;
var cuadrados = document.querySelectorAll(".cuadrados");
var colorElegido = color[Math.round(Math.random()*6)];
var colorMostrado = document.getElementById("colorMostrado");
var mensaje = document.getElementById("mensaje");
/*var h1 = document.querySelector("h1");*/
var nuevoColor = document.getElementById("reiniciar");
var seleccion = document.querySelectorAll(".seleccionado");

//elijo la dificultad

for(i=0;i<seleccion;i++)
{
	/*seleccion[i].addEventListener("mouseover",function(){

			this.style.backgroundColor="green"
	});*/
	

	seleccion[i].addEventListener("click",function(){


			if(this.textContent==="Fácil")
				{
					numColores = 3;
				}
				else{
					numColores = 6;
				}

				reiniciar();
	});
}

nuevoColor.addEventListener("click",reiniciar);

reiniciar();

//muestro el color que debe elegir el usuario
colorMostrado.innerHTML = colorElegido;






/*for(var i=0;i<cuadrados.length;i++){

	cuadrados[i].style.backgroundColor=color[i];
	cuadrados[i].addEventListener("click", function(){

		colorSele = this.style.backgroundColor;

		if (colorSele === colorElegido)
		{
				mensaje.textContent="Correcto!!";
				mensaje.style.backgroundColor="green";
				cambiarColor(colorElegido);

		}else{
					this.style.backgroundColor = "green";
					mensaje.textContent="Volve a intentar";
					mensaje.style.backgroundColor="red";

			}

	});
}*/

//cambio todos los colores al color correcto pasandolo como variable
function cambiarColor(color){

	for(i=0;i<cuadrados.length;i++)
		{
			cuadrados[i].style.backgroundColor = color;
		}
}

//lleno un vector con todos los colores que voy sacando dependiendo de la cantidad de cuadrados que haya

function llenarColores(){

		var colores = [];
		for(i=0;i<numColores;i++)
			{
				colores[i] = colorRandom();
			}
		return colores;
}

//saco los colores al azar y los mando en una variable uno por uno

function colorRandom(){

	var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b= Math.floor(Math.random()*256);
	var color = "rgb("+ r + ", " + g + ", " + b + ")";  //cuatro horas para descubrir que me faltaba un espacio al lado de las comas cuando asigno el color

	//Validar para que no me de el mismo color que el background de body
	
	return color;
}

function cambiarCuadrados(){

/*
for(var i=0;i<cuadrados.length;i++){

	if(color[i]){

			cuadrados[i].style.backgroundColor = color[i];
			cuadrados[i].style.display = block;
	}else{
	
		cuadrados[i].style.display = hidden;
		}
	}
}
*/


 //le mando los colores a los cuadrados y hago la funcion de clickear

	for(var i=0;i<cuadrados.length;i++){

	cuadrados[i].style.backgroundColor=color[i];
	cuadrados[i].addEventListener("click", function(){

		colorSele = this.style.backgroundColor;

		if (colorSele === colorElegido)
		{
				mensaje.textContent="Correcto!!";
				mensaje.style.backgroundColor="green";
				cambiarColor(colorElegido);

		}else{
					this.style.backgroundColor = "green";
					mensaje.textContent="Volvé a intentar";
					mensaje.style.backgroundColor="red";

			}
		});
	}
}

//cambia todos los colores, vacia el mensaje de acierto o error y me asigna el color a elegir

function reiniciar(){

	var i = Math.floor(Math.random()*numColores);
	color = llenarColores();
	colorElegido = color[Math.round(Math.random()*6)]; //para obtener un valor al azar entre 0 y 6
	colorMostrado.textContent = colorElegido;
	mensaje.textContent="";
	cambiarCuadrados();
	
	
}