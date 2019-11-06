const socket = io();


var neighborhoods = [
	{
		index: 0, lat: -12.062283, lng: -76.994354, content: '<div id="content">' +
			'<div id="siteNotice">' +
			'</div>' +
			'<h1 id="firstHeading" class="firstHeading">Evento 1</h1>' +
			'<div id="bodyContent">' +
			'<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
			'sandstone rock formation in the southern part of the ' +
			'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
			'south west of the nearest large town, Alice Springs; 450&#160;km ' +
			'(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
			'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
			'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
			'Aboriginal people of the area. It has many springs, waterholes, ' +
			'rock caves and ancient paintings. Uluru is listed as a World ' +
			'Heritage Site.</p>' +
			'<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
			'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
			'(last visited June 22, 2009).</p>' +
			'</div>' +
			'</div>'
	},
	{
		index: 1, lat: -12.060261, lng: -76.993825, content: '<div id="content">' +
			'<div id="siteNotice">' +
			'</div>' +
			'<h1 id="firstHeading" class="firstHeading">Evento 2</h1>' +
			'<div id="bodyContent">' +
			'<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
			'sandstone rock formation in the southern part of the ' +
			'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
			'south west of the nearest large town, Alice Springs; 450&#160;km ' +
			'(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
			'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
			'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
			'Aboriginal people of the area. It has many springs, waterholes, ' +
			'rock caves and ancient paintings. Uluru is listed as a World ' +
			'Heritage Site.</p>' +
			'<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
			'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
			'(last visited June 22, 2009).</p>' +
			'</div>' +
			'</div>'
	},
	{
		index: 2, lat: -12.060911, lng: -76.997097, content: '<div id="content">' +
			'<div id="siteNotice">' +
			'</div>' +
			'<h1 id="firstHeading" class="firstHeading">Evento 3</h1>' +
			'<div id="bodyContent">' +
			'<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
			'sandstone rock formation in the southern part of the ' +
			'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
			'south west of the nearest large town, Alice Springs; 450&#160;km ' +
			'(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
			'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
			'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
			'Aboriginal people of the area. It has many springs, waterholes, ' +
			'rock caves and ancient paintings. Uluru is listed as a World ' +
			'Heritage Site.</p>' +
			'<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
			'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
			'(last visited June 22, 2009).</p>' +
			'</div>' +
			'</div>'
	},
	{
		index: 3, lat: -12.061614, lng: -76.993181, content: '<div id="content">' +
			'<div id="siteNotice">' +
			'</div>' +
			'<h1 id="firstHeading" class="firstHeading">Evento 4</h1>' +
			'<div id="bodyContent">' +
			'<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
			'sandstone rock formation in the southern part of the ' +
			'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
			'south west of the nearest large town, Alice Springs; 450&#160;km ' +
			'(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
			'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
			'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
			'Aboriginal people of the area. It has many springs, waterholes, ' +
			'rock caves and ancient paintings. Uluru is listed as a World ' +
			'Heritage Site.</p>' +
			'<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
			'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
			'(last visited June 22, 2009).</p>' +
			'</div>' +
			'</div>'
	},
	{
		index: 4, lat: -12.063639, lng: -76.994222, content: '<div id="content">' +
			'<div id="siteNotice">' +
			'</div>' +
			'<h1 id="firstHeading" class="firstHeading">Evento 5</h1>' +
			'<div id="bodyContent">' +
			'<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
			'sandstone rock formation in the southern part of the ' +
			'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
			'south west of the nearest large town, Alice Springs; 450&#160;km ' +
			'(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
			'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
			'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
			'Aboriginal people of the area. It has many springs, waterholes, ' +
			'rock caves and ancient paintings. Uluru is listed as a World ' +
			'Heritage Site.</p>' +
			'<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
			'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
			'(last visited June 22, 2009).</p>' +
			'</div>' +
			'</div>'
	}
];

var markers = [];
var map;
var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
var positionActual;



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
		marker.addListener('click', function () {
			var contentPopUp = '<div id="content">' +
				'<div id="siteNotice">' +
				'</div>' +
				'<h1 id="firstHeading" class="firstHeading">Evento Nuevo</h1>' +
				'<div id="bodyContent">' +
				'<p><b>Evento Nuevo</b>, Esta es la ubicación' +
				'<br>disfruta de los eventos cercanos a ti.</p>' +
				'(Last visited Setiembre 20, 2019).</p>' +
				'</div>' +
				'</div>';
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

function drop() {
	clearMarkers();
	for (var i = 0; i < neighborhoods.length; i++) {
		console.log(neighborhoods[i]);
		addMarkerWithTimeout(neighborhoods[i], i * 200);
	}
}


function addMarkerWithTimeout(neighborhood, timeout) {
	window.setTimeout(function () {
		addMarker(neighborhood, "evento", true);
	}, timeout);
}