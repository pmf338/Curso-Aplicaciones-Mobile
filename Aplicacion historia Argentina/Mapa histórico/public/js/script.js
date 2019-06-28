////////////////////////////////////  SCRIPT DE DATABASE  /////////////////////////////////////////////////


//////////////////////////   SCRIPT DEL MAPA ////////////////////////////////////////////////////////


// detecto el dispositivo y cambio el mapa para que sea responsive

function detectBrowser() {
	var useragent = navigator.userAgent;
	var mapdiv = document.getElementById("map");
  
	if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) {
	  mapdiv.style.width = '100%';
	  mapdiv.style.height = '100%';
	} else {
	  mapdiv.style.width = '600px';
	  mapdiv.style.height = '800px';
	}
  }
  detectBrowser();



  var map;
var layer_0;
var legend;
var controlDiv;
var myControl;
var style;
var styledMapType;
var anio;



function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
	zoom: 4,
	minZoom:4,
	maxZoom:4,
	center:{lat:-39.05,lng:-58.449672},
	mapTypeControlOptions: {
		mapTypeIds: [] // Saco las opciones de cambiar el tipo de mapa
	 },

	 disableDefaultUI: true, // deshabilita los controles predeterminados del mapa
	 fullscreenControl: true,
	 gestureHandling: 'none' // deshabilita el movimiento por el mapa

   
	
	
  });

  

  var drawingManager = new google.maps.drawing.DrawingManager({drawingMode: google.maps.drawing.OverlayType.MARKER,
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
    },
    markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
    circleOptions: {
      fillColor: '#ffff00',
      fillOpacity: 1,
      strokeWeight: 5,
      clickable: false,
      editable: true,
      zIndex: 1
    }
  });

  drawingManager.setMap(map);

  
  
  
  
  //Agrega el boton de filtrar al mapa, me falta hacer la funcion MyControl
/*
   controlDiv = document.createElement('filtrar');
   myControl = new MyControl(controlDiv);
   controlDiv.index = 1;
   map.controls[google.maps.ControlPosition.TOP_RIGHT].push(controlDiv);
*/

  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push
  (document.getElementById('legend')); // Agrego la leyenda al mapa

 

  

  // saco todos los labels, todas las rutas, etc...

   style = [
	{
	  featureType: 'all',
	  elementType: 'all',
	  stylers: [
		{ saturation: -52 }
	  ]
	},
	{
	  featureType: 'road.highway',
	  elementType: 'all',
	  stylers: [
		{ visibility: 'off' }
	  ]
	},
	{
	  featureType: 'road.arterial',
	  elementType: 'all',
	  stylers: [
		{ visibility: 'off' }
	  ]
	},
	{
	  featureType: 'road.local',
	  elementType: 'all',
	  stylers: [
		{ visibility: 'off' }
	  ]
	},
	{
	  featureType: 'administrative.country',
	  elementType: 'all',
	  stylers: [
		{ visibility: 'off' }
	  ]
	},
	{
	  featureType: 'administrative.province',
	  elementType: 'all',
	  stylers: [
		{ visibility: 'off' }
	  ]
	},
	{
	  featureType: 'administrative.locality',
	  elementType: 'all',
	  stylers: [
		{ visibility: 'off' }
	  ]
	},
	{
	  featureType: 'administrative.neighborhood',
	  elementType: 'all',
	  stylers: [
		{ visibility: 'off' }
	  ]
	},
	{
	  featureType: 'administrative.land_parcel',
	  elementType: 'all',
	  stylers: [
		{ visibility: 'off' }
	  ]
	},
	{
	  featureType: 'poi',
	  elementType: 'all',
	  stylers: [
		{ visibility: 'off' }
	  ]
	},
	{
	  featureType: 'transit',
	  elementType: 'all',
	  stylers: [
		{ visibility: 'off' }
	  ]
	}
  ];
	
	document.getElementById("años").value = 2018;
   
   styledMapType = new google.maps.StyledMapType(style, {
	map: map,
	name: 'Styled Map'
  });
  map.mapTypes.set('map-style', styledMapType);
  map.setMapTypeId('map-style');
  layer_0 = new google.maps.FusionTablesLayer({
	query: {
	  select: "col2",
	  from: zza.id
	},
	map: map,
	styleId: zza.style,
	templateId: zza.template
  });

  /*
  legend = document.getElementById('legend');
  for (var style in styles) {
	var name = style.name;
	var icon = style.icon;
	var div = document.createElement('div');
	div.innerHTML = '<img src="' + icon + '"> ' + name;
	legend.appendChild(div);
  }
  */
}
google.maps.event.addDomListener(window, 'load', initMap);





function año(){

	// llamo a la funcion cuando hay un cambio en el input

	//Tomo el valor ingresado, recorro el array que contiene los objetos con el id del mapa
	//que guarde de fusion tables y comparo el año ingresado con el año de los objetos
	//cuando coincida seteo el layer del mapa a null para que se borre el layer anterior
	//y cargo en la misma variable layer una capa nueva, cargando los poligono de los archivos GeoJson

		var ingreso = document.getElementById("años").value;
		
		for(i=0;i<capas.length;i++)
		{

			if(ingreso==capas[i].anio)
			{
				layer_0.setMap(null);
			  layer_0 = new google.maps.FusionTablesLayer({
				query: {
				  select: "col2",
				  from: capas[i].id
				},
				map: map,
				styleId: capas[i].style,
				templateId: capas[i].template
				});
			  
			};
		};
};
	

//Boton para regresar al año 2018, falta agregar para que se borre todo lo dibujado en el mapa

function reiniciar(){

	layer_0.setMap(null);
	document.getElementById("años").value = 2018;

	layer_0 = new google.maps.FusionTablesLayer({
		query: {
			select: "col2",
			from: zza.id
		},
		map: map,
		styleId: zza.style,
		templateId: zza.template
		});
	
}			
		

					
	function avanzar(){
	
				anio = document.getElementById("años").value;
				anio++;

				

				layer_0.setMap(null);
					layer_0 = new google.maps.FusionTablesLayer({
					query: {
						select: "col2",
						from: capas[anio].id
					},
					map: map,
					styleId: capas[anio].style,
					templateId: capas[anio].template
					});
	
	
	};




/* //agregar un icono en cualquier parte del mapa

	google.maps.event.addListener(map,"click",

		function(event){
			//agregar marcador
			addMarker({coords:event.latLng});


	});
*/
//agregar multiples marcadores
/*
	var markers = [

	{
		coords:{lat:-34.545344,lng:-58.449672},
		iconImage:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
		content:"<h1>Estadio Monumental</h1>"

	},
	

	{

		coords:{lat:-34.606615,lng:-58.435457},
		content:"<h1>Parque Centenario</h1>"

	},

	{coords:{lat:-34.653573,lng:-58.620180}}

	];



	//recorrer los marcadores

	for(var i=0;i<markers.length;i++)
	{
		addMarker(markers[i]);
	}



	function addMarker(props){

		var marker = new google.maps.Marker({
		position:props.coords,
		map:map,
		//icon:props.iconImage
	});

		//revisando el icono customizado
		if (props.iconImage) {

			//asignar imagen de icono
			marker.setIcon(props.iconImage);
		}

		//revisando el contenido
		if(props.content){

			var infoWindow = new google.maps.InfoWindow({

			content:props.content
	});

			marker.addListener("click",function(){
		infoWindow.open(map, marker);

	});

		}
}

	


	/*var image = {

		url:'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/107.png',
		
		};
	*/
	


	/*

	//agregar marcador
	var marker = new google.maps.Marker({
		position:{lat:-34.545344,lng:-58.449672},
		map:map,
		icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
	});
*/
//ventana de info
/*
	var infoWindow = new google.maps.InfoWindow({

			content:"<h1>Estadio Monumental</h1>"	

	});


	marker.addListener("click",function(){
		infoWindow.open(map, marker);

	});
*/







//No estaria entendiendo lo de size, origin y anchor
/*
// Orígenes, posición de ancla y coordenadas del marcador se incrementan en la dirección X
// a la drecha y en la dirección Y hacia abajo..
var image = {
  url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
  // Este marcador tiene 20 pixeless de ancho por 32 pixeles de alto.
  size: new google.maps.Size(20, 32),
  // El origen para esta imagen es (0, 0).
  origin: new google.maps.Point(0, 0),
  // El ancla para esa imagen es la base del asta bandera en (0, 32).
  anchor: new google.maps.Point(0, 32)
};
*/



//agregar marcadores */

