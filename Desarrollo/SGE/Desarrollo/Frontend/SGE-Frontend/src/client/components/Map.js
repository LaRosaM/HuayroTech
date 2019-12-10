//Importaciones
import React, { Component } from 'react';
import { render } from 'react-dom';

// Componentes
import MenuLateral from './MenuLateral';
import PopUpCrear from './PopUpCrear';
import PopUpEditar from './PopUpEditar';

// Styles
import '../../public/css/main.css';
import '../../public/css/menuLateral.css';
import '../../public/css/popup.css';



class App extends Component {


  constructor(props) {

    super(props);

    this.state = {
      task: {
        title: 'My First component',
        done: true
      },
      indexPosActual: 0,
      events: []
    };

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    const task = this.state.task;
    task.done = !task.done;
    this.setState({
      task
    });
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((data) => {
        this.setState({ events: data })
      })
      .catch(console.log);
    //Init MAP
    datos();
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


  dropPrueba() {
    var drop = document.getElementById('drop');

    clearMarkers();
    for (var i = 0; i < neighborhoods.length; i++) {
      //console.log(neighborhoods[i]);
      addMarkerWithTimeout(neighborhoods[i], i * 200);
      console.log("RESULTADO QUE FUNCIONA AJAX");
      console.log(obj);
    }
  }

  render() {
    return (

      <div style={{
        margin: 0,
        padding: 0
      }}>

        <input type="hidden" id="posActual" name="posActual"></input>

        <MenuLateral />

        <div id="floating-panel">
          <a id="drop" className="btn-floating" onClick={this.dropPrueba}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="change2"><i className="fa fa-search-location"></i> eventos</span>
          </a>
        </div>
        <div id="map" ></div>


        <PopUpEditar />

        <PopUpCrear />

      </div>
    )

  }

}

export default App;