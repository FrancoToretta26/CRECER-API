import "../App.css";
import Titulo from '../components/titulo';
import {
  Container,
} from 'reactstrap';
import Carrusel from "../components/carrusel";
import Card from "../components/cards/card";
import Footer from "../components/footer";
import SocialMedia from "../components/socialmedia";
import React from "react";
import Grid from '@material-ui/core/Grid';
import Card2 from "../components/cards/card2";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Card4 from "../components/cards/card4";
import QuienesSomosFoto from "../img/QuienesSomos.jpg";
import TextField from '@material-ui/core/TextField';
import Navbar from "../components/menu/Navbarmenu";


function Home() { 
  return (
    <div className="QuienesSomos">
<Navbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false">
        <Typography component="div" style={{ backgroundColor: '#F8F8FF', height: '150' }}>
        <center>
        <h1 class="center">Somos CRECER</h1>
        <text className='letraTexto'>Un equipo trabajando con el unico objetivo de simplificar las tareas del seguimiento pediatrico de los niños
permitiendo que los padres y adultos al cuidado de niños puedan enfocarse en lo que realmente importa, disfrutar con ellos.</text>

        <img src={QuienesSomosFoto} width="1080" height="720"/>

        <br/>
        <br/>
        <text className='letraTexto'>Nuestra mision es ayudar con el cuidado, control y crecimiento de los niños</text>

        <h1 class="center">Te ayudamos a cuidar lo mas importante</h1></center>
        <br/>
        <br/>
        </Typography> 
      </Container>
    <SocialMedia/> 
    </React.Fragment>
    </div>


  );
}


export default Home;