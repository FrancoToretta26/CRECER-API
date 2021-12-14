import React from 'react';
import logo from '../img/logo.png';

function Bienvenida(props){
    return(
        <div>
            <h3>
                Hola <i> {props.nombre} </i> somos PediatrAR
            </h3>
            <p>
                Consulta los turnos de vacunación para tu hijo
            </p>
            <img src={logo} alt='Loguito' width="250" height="300" />
        </div>
    );

}

export default Bienvenida;