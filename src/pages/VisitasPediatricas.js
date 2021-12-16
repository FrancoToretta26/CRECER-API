import Calendario from "../components/calendar";       
import "../App.css";
import {
  Container,
} from 'reactstrap';
import Footer from "../components/footer";
import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Navbar from "../components/menu/Navbarmenu";
import DropdownMenuHijo from "../components/dropdownsMenu/dropdownMenuHijo";
import ControlPediatricoImg from '../img/ControlPediatrico.jpg'
import NavbarLog from "../components/menu/Navbarmenu";

function VisitasPediatricas() { 
    return (
      <div className="PediatrAR">
      <React.Fragment>
        <NavbarLog/>
        <CssBaseline />
        <Container maxWidth="false">
        <center>
        <br/>
        <br/>
        <br/>
        <br/>  
        <br/>
        <img src={ControlPediatricoImg}/>
        <br/>
        <text className="letraTexto">Las visitas al pediatra no solo deben hacerse en caso de enfermedad, sino que también son importantes para los niños sanos. Cada control pediátrico incluye un examen físico completo. En este examen, el médico verifica el crecimiento y desarrollo del bebé o del niño con el fin de encontrar o prevenir problemas.</text>
        <br/>
        <br/>
        <text className="titulo-vp">Calendario de Visitas Pediatricas</text>
        <br/>
        <br/>
        <br/>
        <Calendario/>
        <br/>
        <br/>
        <br/>
        </center>
        </Container>
      </React.Fragment>
      </div>
  
  
    );
  }
  
  
  export default VisitasPediatricas;