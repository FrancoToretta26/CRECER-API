import CalendarioVacunacion from "../components/imageZoom";       
import "../App.css";
import {
  Container,
} from 'reactstrap';
import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from "../components/menu/Navbarmenu";

function CalendarioVacunatorio() { 
    return (
      <div className="PediatrAR">
      <Navbar/>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="false">
        <center>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <text className='h1'>¿Por qué es importante estar vacunados?</text>
        <br/>
        <br/>
        <text className="letraTexto">Porque es una de las principales medidas para evitar un conjunto de enfermedades prevenibles por vacunas que pueden ser graves para nuestra salud .

Es nuestra responsabilidad y obligación que nos apliquemos las vacunas que nos corresponden durante todas las etapas de la vida, para evitar enfermarnos y contagiar a nuestra familia y otras personas.</text>
        <br/>
        <br/>
        <br/>
        <br/>
        <text className="titulo-vp">Calendario de Vacunación</text>
        <br/>
        <CalendarioVacunacion/>
        <br/>
        <br/>
        <text className='letraTexto'>Todas las vacunas del Calendario Nacional son obligatorias, gratuitas y se aplican en los vacunatorios, centros de salud y hospitales públicos del país. Nuestro calendario incluye vacunas para todas las etapas de la vida, situaciones especiales o para grupos específicos.</text>
        <br/>
        <br/>
        <br/>
        <br/>
        </center>
        </Container>
      </React.Fragment>
      </div>
  
  
    );
  }
  
  
  export default CalendarioVacunatorio;