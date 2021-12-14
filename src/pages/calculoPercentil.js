import "../App.css";
import {
  Container,
} from 'reactstrap';
import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DatePicker from "../components/datepicker";
import Imagen from "../components/perfil/imagen";
import Button from '@material-ui/core/Button';
import DropdownMenuHijo from '../components/dropdownsMenu/dropdownMenuHijo'
import PercentilPeso from '../img/PercentilPeso.png'
import PercentilAltura from '../img/PercentilAltura'
import PercentilCabeza from '../img/PercentilCabeza.png'
import PercentilSinLog from '../img/PercentilSinLog.jpg'
import Navbar from "../components/menu/Navbarmenu";




function calculoPercentil() { 
    return (
      <div className="AgregarNiño">
      <Navbar/>
      <React.Fragment>
        <CssBaseline />
        <Container transparent maxWidth="false">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <center>
        <text className='h1'>¿Cuanto tiene que pesar y medir nuestro hijo?</text>
        <br/>
        <br/>
        <br/>
        <text className="letraTexto">Para que puedas consultar cualquier duda que tengas al respecto, CRECER te acerca los gráficos de estatura por edad que proporciona la Sociedad Argentina de Pediatría (SAP). El cuadro está basado en los datos del Estudio Multicéntrico de la Organización Mundial de la Salud sobre los patrones de crecimiento del año 2006.</text>
        <br/>
        <br/>
        <br/> 
        <img src={PercentilSinLog}/>   
    <br/>
    <br/>
    <text className='h1'>Percentil de Peso</text>
        <br/>
        <text className="letraTexto">En el eje horizontal se agrupa la escala de la edad. Se presenta en meses y años cumplidos desde el nacimiento hasta los 5 años. En el eje vertical se agrupa la escala de peso que se presenta por kilogramos (desde 0 a 24 kilogramos).</text>
        <br/>
        <br/>
        <img src={PercentilPeso}/>

        <br/>
        <br/>
        <text className='h1'>Percentil de altura</text>
        <br/>
        <text className="letraTexto">La línea del Percentil 50 que atraviesa el gráfico representa la estatura normal de un niño a cierta edad. Por ejemplo, si tenés un bebé varón de un año tendría que medir 75 centímetros. Si no es exactamente la estatura de tu hijo no te preocupes, las tres líneas que hay por encima y por debajo de la más gruesa indican las variaciones más comunes. Pero si observás una diferencia más drástica en la altura de tu hijo teniendo en cuenta su edad y su sexo, es recomendable que visites a su pediatra, siempre es mejor detectar los problemas antes de tiempo.</text>
        <br/>
        <br/>
        <img src={PercentilAltura}/>
        <br/>
        <br/>
        <text className='h1'>Percentil de Diametro de Cabeza</text>
        <br/>
        <text className="letraTexto">Calcule el percentil de diametro de cabeza de su nene</text>
        <br/>
        <br/>
        <img src={PercentilCabeza}/>





    </center>
        </Container>
        <br/>
        <br/>
      </React.Fragment>
      </div>
  
  
    );
  }
  
  
  export default calculoPercentil;