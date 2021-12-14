import React, {useState} from "react";
import "../App.css";
import {
  Container,
} from 'reactstrap';
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
import PercentilCabeza from '../img/PercentilCabeza.png';
import {getHijosByName} from "../controller/miApp.controller";
import MenuItem from '@material-ui/core/MenuItem';
import { Card, Stack } from '@mui/material';
import { maxHeight } from "@material-ui/system";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { render } from "react-dom";
import { Icon } from '@iconify/react';
import NavbarLog from "../components/menu/NavbarmenuLog";


export default function CalculoPercentil(props) { 


  const [hijosDropdown, sethijosDropdown] = React.useState('');
  const handleChangeHijos = (event) => {
    sethijosDropdown(event.target.value);
  };
  const [alturaDropdown, setalturaDropdown] = React.useState('');
  const handleChangeAltura = (event) => {
    setalturaDropdown(event.target.value);
  };



  // const nombre = localStorage.getItem('nameHijo')
  // const edad = localStorage.getItem('edadHijo')
  // const Peso = localStorage.getItem('pesoHijo')
  // const altura = localStorage.getItem('alturaHijo')
  // const diametro = localStorage.getItem('diametroHijo')

  // const nombreReworked = nombre.replace(/['"]+/g, '')
  // const edadHijo = 'Edad: ' + edad.replace(/['"]+/g, '')
  // const pesoHijo = 'Peso: ' + Peso.replace(/['"]+/g, '')
  // const alturaHijo = 'Altura: ' + altura.replace(/['"]+/g, '')
  // const diametroHijo = 'Diametro de Cabeza: ' + diametro.replace(/['"]+/g, '')


  const ARRAYHIJOS = JSON.parse(localStorage.getItem('arrayHijos'))
  console.log('arrayhijos',ARRAYHIJOS)
  var nombresPA = []


  
return (
      <div className="AgregarNiño">
          <NavbarLog/>
          <CssBaseline />
          <Container transparent maxWidth="false">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <center>
              <text className='h1'>¿Cuánto tiene que pesar y medir nuestro hijo?</text>
              <br />
              <br />
              <br />
              <text className="letraTexto">Para que puedas consultar cualquier duda que tengas al respecto, CRECER te acerca los gráficos de estatura por edad que proporciona la Sociedad Argentina de Pediatría (SAP). El cuadro está basado en los datos del Estudio Multicéntrico de la Organización Mundial de la Salud sobre los patrones de crecimiento del año 2006.</text>
              <br />
              <br />
              <br />
          

  
        <Container sx={{ py: 2 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {ARRAYHIJOS.map((card) => (
              <Grid item key={card} xs={12} sm={4} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <center><Icon icon="mdi:account-circle" weidth='50' height='50' />

                      <Typography gutterBottom variant="h4" component="h2" color="inherit">
                      {card.name}
                    </Typography></center>
                    <br></br>
                    <Typography variant='h6'>
                      Edad: {card.edad}
                    </Typography>
                    <Typography variant='h6'>
                      Altura: {card.altura}
                    </Typography>
                    <Typography variant='h6'>
                      Peso: {card.peso}
                    </Typography>
                    <Typography variant='h6'>
                      Diametro de la Cabeza: {card.diametroCabeza}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
              <br />
              <br />
            </center>
            {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
              <TextField
                  id="alturaDDropdown"
                  disabled
                  fullWidth
                  type="genero"
                  name="genero"
                  value={hijosDropdown}
                  onChange={handleChangeAltura}
                  >
                  {ARRAYHIJOS.map((option) => (  
                  <MenuItem key={option.altura} value={option.altura}>
                  {option.altura}
                  {option.peso}
                  </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  disabled
                  margin="normal"
                  fullWidth
                  id='Peso'
                  label='peso'
                  name='Peso'
                  autoComplete='Peso'
                  autoFocus />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  margin="normal"
                  disabled
                  fullWidth
                  id='Altura'
                  label='altura'
                  name='Altura'
                  autoComplete='Altura'
                  autoFocus />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  margin="normal"
                  disabled
                  fullWidth
                  id='Diametro de Cabeza'
                  label='ja'
                  name='Diametro de Cabeza'
                  autoComplete='Diametro de Cabeza'
                  autoFocus />
              </Grid>
            </Grid> */}
            <br />
            <br />
            <center>
              <text className='h1'>Percentil de Peso</text>
              <br />
              <text className="letraTexto">En el eje horizontal se agrupa la escala de la edad. Se presenta en meses y años cumplidos desde el nacimiento hasta los 5 años. En el eje vertical se agrupa la escala de peso que se presenta por kilogramos (desde 0 a 24 kilogramos).</text>
              <br />
              <br />
              <img src={PercentilPeso} />

              <br />
              <br />
              <text className='h1'>Percentil de altura</text>
              <br />
              <text className="letraTexto">La línea del Percentil 50 que atraviesa el gráfico representa la estatura normal de un niño a cierta edad. Por ejemplo, si tenés un bebé varón de un año tendría que medir 75 centímetros. Si no es exactamente la estatura de tu hijo no te preocupes, las tres líneas que hay por encima y por debajo de la más gruesa indican las variaciones más comunes. Pero si observás una diferencia más drástica en la altura de tu hijo teniendo en cuenta su edad y su sexo, es recomendable que visites a su pediatra, siempre es mejor detectar los problemas antes de tiempo.</text>
              <br />
              <br />
              <img src={PercentilAltura} />
              <br />
              <br />
              <text className='h1'>Percentil de Diametro de Cabeza</text>
              <br />
              <text className="letraTexto">Calcule el percentil de diametro de cabeza de su nene</text>
              <br />
              <br />
              <img src={PercentilCabeza} />





            </center>
          </Container>
          <br />
          <br />
      </div>
  
  
    );
  }
  
  
