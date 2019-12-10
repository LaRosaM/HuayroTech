const socket = io();


var neighborhoods = [
	{
		index: 0, lat: -12.062283, lng: -76.994354, content: '<div id="content">' +
			'<div id="siteNotice">' +
			'</div>' +
			'<h1 id="firstHeading" class="firstHeading">Perú Ska Festival</h1>' +
			'<div id="bodyContent">' +
			'<p> En nuestro país la influencia del ska se encuentra presente en muchas bandas o agrupaciones ' +
			'locales de diversas ciudades del país. Luego de las 3 exitosas ediciones del Lima Ska Festival.</p>' +
			'<p>Attribution: <a href="https://www.google.com/">' +
			'Ska Festival</a> ' +
			'sáb., 16 nov. 18:00–dom</p>' +
			'</div>' +
			'</div>'
	},
	{
		index: 1, lat: -12.060261, lng: -76.993825, content: '<div id="content">' +
			'<div id="siteNotice">' +
			'</div>' +
			'<h1 id="firstHeading" class="firstHeading">Get Out Festival</h1>' +
			'<div id="bodyContent">' +
			'<p> Te invitamos a escapar del tráfico, del jefe abusivo, del profesor aburrido, '+
			'de los amigos sin ganas de divertirse, del curso que no entiendes, de todo lo que tienes '+
			'que hacer pero no te gusta. Escápate con nosotros a un mundo donde la música suena alto, '+
			'la sorpresa es permanente y los recuerdos imborrables nacen.</p>' +
			'<p>Attribution: <a href="https://www.google.com/">' +
			'Get Out Festival</a> ' +
			'sáb., 23 dic. 18:00–dom</p>' +
			'</div>' +
			'</div>'
	},
	{
		index: 2, lat: -12.060911, lng: -76.997097, content: '<div id="content">' +
			'<div id="siteNotice">' +
			'</div>' +
			'<h1 id="firstHeading" class="firstHeading">Aero Expo Perú</h1>' +
			'<div id="bodyContent">' +
			'<p>El Aero Expo Perú en Lima es una feria para la aviación comercial y turístico. '+
			'Esta exposición es la plataforma de la comunicación y de la información en la industria '+
			'y ofrece a las empresas expositoras la oportunidad de presentar a una audiencia de expertos aquí. '+
			'Los visitantes pueden encontrar en la profundidad y la amplia información aquí sobre las últimas novedades, '+
			'tendencias, productos y servicios en diversos campos.</p>' +
			'<p>Attribution: <a href="https://www.google.com/">' +
			'Aero Expo Perú</a> ' +
			'sáb., 23 dic. 18:00–dom</p>' +
			'</div>' +
			'</div>'
	},
	{
		index: 3, lat: -12.061614, lng: -76.993181, content: '<div id="content">' +
			'<div id="siteNotice">' +
			'</div>' +
			'<h1 id="firstHeading" class="firstHeading">Kapital 2.5</h1>' +
			'<div id="bodyContent">' +
			'<p>Kapital 2.5 regresa con nuevas historias que muestran, de forma muy irónica, '+
			'la realidad a la que los políticos y autoridades someten a la población, lo que genera '+
			'un ambiente de violencia.</p>' +
			'<p>Attribution: <a href="https://www.google.com/">' +
			'Kapital 2.5</a> ' +
			'sáb., 23 dic. 18:00–dom</p>' +
			'</div>' +
			'</div>'
	},
	{
		index: 4, lat: -12.063639, lng: -76.994222, content: '<div id="content">' +
			'<div id="siteNotice">' +
			'</div>' +
			'<h1 id="firstHeading" class="firstHeading"> VIVO X EL ROCK 2019 </h1>' +
			'<div id="bodyContent">' +
			'<p>Esta nueva versión del festival más importante del país, se presentará'+
			' a la reconocida banda de indie rock The Strokes como el primer headliner de su Line Up.</p>' +
			'<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
			'<p>Attribution: <a href="https://www.google.com/">' +
			'VIVO X EL ROCK 2019</a> ' +
			'sáb., 23 nov. 18:00–dom</p>' +
			'</div>' +
			'</div>'
	}
];

var markers = [];
var map;
var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
var indexPosActual = 0;
var drop = document.getElementById('drop');


function initMap() {
	
	if (navigator.geolocation) {
		
		navigator.geolocation.getCurrentPosition((position) => {
			positionActual = position.coords;

			/*===================== Ubicamos el mapa con centro en la ubicacion actual =====================*/
			map = new google.maps.Map(document.getElementById('map'), {
				zoom: 15,
				center: { lat: positionActual.latitude, lng: positionActual.longitude },
				mapTypeId: 'terrain'
			});

			console.log(map)
			/*===================== Creamos el marcador de la ubicacion actual =====================*/

			// Adds a marker at the center of the map.
			addMarker(positionActual, "ubicacion", true);

			socket.emit('userCoordinates', {
				latitude: positionActual.latitude,
				longitude: positionActual.longitude
			}); //Eviamos las coordenas del nuevo usuario conectado

			socket.on('newUserCoordinates', coordsNew => {
				//Crear el marcador
				// Primero en tiempo real porque lo otro seria solo agregar en el array y con el drop
				new google.maps.Marker({
					position: { lat: coordsNew.latitude + 1, lng: coordsNew.longitude + 0.1 },
					map: map,
					title: 'Nueva ubicacion'
				}).addListener('click');
			});

			/* setInterval(function () { //Comentar para que no gaste recursos
				socket.emit('myCoordinates', {
					latitude: positionActual.latitude,
					longitude: positionActual.longitude
				});

				socket.on('newMyCoordinates', coordsNew => {
					//Crear el marcador
					setMapOnAll(null); // FALTA: Hacer que solo se borre el marcador de la posicion actual
					addMarker(positionActual, "ubicacion");
				});
			}, 5000); */

		}, function () {
		});
	} else {
	}
}


function addMarker(location, type, efect) {
	if (type == "ubicacion") {
		if (efect) {
			var marker = new google.maps.Marker({
				position: { lat: location.latitude, lng: location.longitude },
				map: map,
				animation: google.maps.Animation.DROP,//Buscar la manera de condicionar el efecto por parametro
			});
		} else {
			var marker = new google.maps.Marker({
				position: { lat: location.latitude, lng: location.longitude },
				map: map,
			});
		}

		markers.push(marker);
		marker.addListener('click', function () {
			var contentPopUp = '<div id="content">' +
				'<div id="siteNotice">' +
				'</div>' +
				'<h1 id="firstHeading" class="firstHeading">Ubicacion Actual</h1>' +
				'<div id="bodyContent">' +
				'<p><b>Hola, Anthony</b>, Esta es tu ubicación actual' +
				'<br>disfruta de los eventos cercanos a ti.</p>' +
				'(Last visited Setiembre 20, 2019).</p>' +
				'</div>' +
				'</div>';
			new google.maps.InfoWindow({
				content: contentPopUp
			}).open(map, this);
		});
	}
	if (type == "evento") {

		if (efect) {
			var marker = new google.maps.Marker({
				position: location,
				map: map,
				animation: google.maps.Animation.DROP,
				icon: image
			});
		} else {
			var marker = new google.maps.Marker({
				position: location,
				map: map,
				icon: image
			});
		}
		markers.push(marker);

		var contentPopUp = location.content;

		marker.addListener('click', function () {
			indexPosActual  = location.index;
			document.getElementById('posActual').value = indexPosActual;
			
			//alert(indexPosActual)
			//var contentPopUp = contenido;
			new google.maps.InfoWindow({
				content: contentPopUp
			}).open(map, this);
		});

	}

}

function crearMarcador(positionActual) {
	var myUbicacionMarker = new google.maps.Marker({
		position: { lat: positionActual.latitude, lng: positionActual.longitude },
		map: map,
		title: 'Mi ubicacion'
	}).addListener('click', function () {
		var contentPopUp = '<div id="content">' +
			'<div id="siteNotice">' +
			'</div>' +
			'<h1 id="firstHeading" class="firstHeading">Ubicacion Actual</h1>' +
			'<div id="bodyContent">' +
			'<p><b>Hola, Anthony</b>, Esta es tu ubicación actual' +
			'<br>disfruta de los eventos cercanos a ti.</p>' +
			'(Last visited Setiembre 20, 2019).</p>' +
			'</div>' +
			'</div>';
		new google.maps.InfoWindow({
			content: contentPopUp
		}).open(map, this);
	});
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
	for (var i = 0; i < markers.length; i++) {
		markers[i].setMap(map);
	}
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
	setMapOnAll(null);
	addMarker(positionActual, "ubicacion", true);
}

// Shows any markers currently in the array.
function showMarkers() {
	setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
	clearMarkers();
	markers = [];
}

drop.addEventListener("click", function(){

	clearMarkers();
	
	for (var i = 0; i < neighborhoods.length; i++) {
		console.log(neighborhoods[i]);
		addMarkerWithTimeout(neighborhoods[i], i * 200);
	}
});

function addMarkerWithTimeout(neighborhood, timeout) {
	window.setTimeout(function () {
		console.log(neighborhoods);
		addMarker(neighborhood, "evento", true);
	}, timeout);
}