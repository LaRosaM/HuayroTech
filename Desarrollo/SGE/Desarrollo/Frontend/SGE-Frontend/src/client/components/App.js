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
      indexPosActual: 0
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

  render() {
    return (
      <div style={{
        margin: 0,
        padding: 0
      }}>

        <input type="hidden" id="posActual" name="posActual"></input>

        <MenuLateral />

        <div id="floating-panel">
          <a id="drop" className="btn-floating">
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