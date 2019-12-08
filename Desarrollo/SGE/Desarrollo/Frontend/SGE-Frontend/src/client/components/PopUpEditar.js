import React, { Component } from 'react';
import { render } from 'react-dom';
import '../../public/css/popup.css';

class PopUpEditar extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>

                <div className="overlay" id="overlay">
                    <div className="popup" id="popup">
                        <a href="#" id="btn-cerrar-popup" className="btn-cerrar-popup"><i className="fas fa-times"></i></a>
                        <div className="container1">
                            <div className="container">
                                <h1>Editar Campos</h1>
                                <div className="">
                                    <form>
                                        <div className="contenedor-inputs">
                                            <label htmlFor="name_evento">Escriba el nombre del evento</label>
                                            <input type="text" id="name_evento" name="name_evento"></input>


                                            <label htmlFor="descripcion_evento">Escriba una descripcion del evento</label>
                                            <input type="text" id="descripcion_evento" name="descripcion_evento"></input>


                                            <label htmlFor="ubicacion_evento">Escriba el lugar del evento</label>
                                            <input type="text" id="ubicacion_evento" name="ubicacion_evento"></input>


                                            <label htmlFor="coordenada_X_evento">Escriba la coordenada X del evento</label>
                                            <input type="text" id="coordenada_X_evento" name="coordenada_X_evento"></input>


                                            <label htmlFor="coordenada_Y_evento">Escriba la coordenada Y del evento</label>
                                            <input type="text" id="coordenada_Y_evento" name="coordenada_Y_evento"></input>


                                            <label htmlFor="enlace_evento">Escriba algun enlace de su evento</label>
                                            <input type="text" id="enlace_evento" name="enlace_evento"></input>


                                            <label htmlFor="telefono_evento">Escriba algun telefono para contactarse a su evento</label>
                                            <input type="text" id="telefono_evento" name="telefono_evento"></input>


                                            <label htmlFor="fecha_evento">Escriba la fecha del evento</label>
                                            <input type="text" id="fecha_evento" name="fecha_evento"></input>


                                            <input type="submit" className="btn-submit"></input>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default PopUpEditar;