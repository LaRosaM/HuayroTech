//Importaciones
import React, { Component } from 'react';
import { render } from 'react-dom';

// Componentes
import MenuLateral from './MenuLateral';
import PopUpCrear from './PopUpCrear';
import PopUpEditar from './PopUpEditar';
import Map from './Map';

import Login from './Login';

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
      events: [],
      isLoggedIn: false
    };

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.setState({
      isLoggedIn: true
    });
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((data) => {
        this.setState({ events: data })
      })
      .catch(console.log);
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    if (isLoggedIn) {

      return (

        <div style={{
          margin: 0,
          padding: 0
        }}>

          <Map />

        </div>
      )
    }

    return (

      <div style={{
        margin: 0,
        padding: 0
      }}>
        <Login />
        <button onClick={this.handleClick} >Iniciar</button>
      </div>
    )
  }

}

export default App;