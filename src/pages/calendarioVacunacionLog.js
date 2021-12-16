import CalendarioVacunacion from "../components/imageZoom";       
import "../App.css";
import {
  Container,
} from 'reactstrap';
import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import DropdownMenu from "../components/dropdownsMenu/dropdownMenuCV";
import DropdownMenuHijo from "../components/dropdownsMenu/dropdownMenuHijo";
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Calendar from '../components/calendarioVacunacion/components/Aver'
import MenuItem from '@material-ui/core/MenuItem';
import { Card, Stack } from '@mui/material';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@material-ui/core/TextField';
import {addVacuna, getHijosByName, getvacunasByMail, vacunaExistente} from "../controller/miApp.controller";
import { Icon } from '@iconify/react';
import NavbarLog from "../components/menu/Navbarmenu";

function VisitasPediatricas() { 
  const [hijos, sethijos] = React.useState('');
  const handleChangeHijos = (event) => {
    sethijos(event.target.value);
  };

      const [vacuna, setvacuna] =React.useState('');
      const [lugar, setlugar] =React.useState('');
      const [fechaVacunacion, setfechaVacunacion] =React.useState('');
      const [horarioVacunacion, sethorarioVacunacion] =React.useState('');
      const [dosis, setdosis] =React.useState('');

      const handleChangeDosis = (event) => {
        setdosis(event.target.value);
      };

      const handleChangeVacuna = (event) => {
        setvacuna(event.target.value);
      };

      const handleChangelugar = (event) => {
        setlugar(event.target.value);
      };

      const handleChangefechaVacunacion = (event) => {
        setfechaVacunacion(event.target.value);
      };

      const handleChangehorarioVacunacion= (event) => {
        sethorarioVacunacion(event.target.value);
      };
    
      const vacunas = [
        {
          value: 'BCG',
          label: 'BCG',
        },
        {
          value: 'HEPATITIS B',
          label: 'HEPATITIS B',
        },
        {
          value: 'PENTAVALENTE (A)',
          label: 'PENTAVALENTE (A)',
        },
        {
          value: 'ROTAVIRUS',
          label: 'ROTAVIRUS',
        },
        {
          value: 'CUADRUPLE (B) O PENTAVALENTE',
          label: 'CUADRUPLE (B) O PENTAVALENTE',
        },
        {
          value: 'SALK (POLIOMIELITIS)',
          label: 'SALK (POLIOMIELITIS)',
        },
        {
          value: 'NEUMOCOCO CONJUGADA',
          label: 'NEUMOCOCO CONJUGADA',
        },
        {
          value: 'GRIPE',
          label: 'GRIPE',
        },
        {
          value: 'MENINGOCOCO A/C/W/Y',
          label: 'MENINGOCOCO A/C/W/Y',
        },
        {
          value: 'TRIPLE VIRAL',
          label: 'TRIPLE VIRAL',
        },
        {
          value: 'HEPATITIS A',
          label: 'HEPATITIS A',
        },
        {
          value: 'VARICELA',
          label: 'VARICELA',
        },
        {
          value: 'TRIPLE BACTERIANA CELULAR',
          label: 'TRIPLE BACTERIANA CELULAR',
        },
        {
          value: 'TRIPLE BACTERIANA ACELULAR',
          label: 'TRIPLE BACTERIANA ACELULAR',
        },
        {
          value: 'HPV',
          label: 'HPV',
        },
        {
          value: 'DOBLE BACTERIANA',
          label: 'DOBLE BACTERIANA',
        },
        {
          value: "DOBLE VIRAL",
          label: "DOBLE VIRAL",
        },
        {
          value: 'COVID-19',
          label: 'COVID-19',
        },
      ];   
      
      const dosiss = [
        {
          value: '1 Dosis',
          label: '1 Dosis',
        },
        {
          value: '2 Dosis',
          label: '2 Dosis',
        },
        {
          value: '3 Dosis',
          label: '3 Dosis',
        },
      ]

  const ARRAYVACUNA = JSON.parse(localStorage.getItem('arrayVacuna'))
  console.log(ARRAYVACUNA)

  const ARRAYHIJOS = JSON.parse(localStorage.getItem('arrayHijos'))
  console.log('arrayhijos', ARRAYHIJOS)

  const NOMBRESHIJOS = localStorage.getItem('nombresHijos')
  console.log('nombres de los hijos', NOMBRESHIJOS)
  const vacunado= async function()
  {
      let datos = {
        hijos: hijos,
        fechaVacunacion:fechaVacunacion,
        vacuna:vacuna,
        lugar:lugar,
        dosis:dosis,
      }
      let agregarVacuna= await addVacuna(datos)
      if(agregarVacuna){
        alert('Vacuna creada correctamente');
      }
      if(!agregarVacuna){
        alert('La vacuna ya ha sido colocada')
      }
      let getHijos = await getHijosByName()
      let getVacunas = await getvacunasByMail()
      window.location.reload(false);
    
  }  

    return (
      <div className="PediatrAR">
      <NavbarLog/>
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
        <text className="letraTexto">Consulte en el calendario las vacunas que tiene que aplicarle a su hijo/a </text>
    <br/>
    <br/>


  
        <CalendarioVacunacion/>
        <br/>
        <br/>
        <text className="titulo-vp">Ultimas Vacunas Aplicadas</text>

        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {ARRAYVACUNA.map((card) => (
              <Grid item key={card} xs={12} sm={3} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}><Icon icon="noto:syringe" heigth='50' width='50'/>

                    <center><Typography gutterBottom variant="h8" component="h2" color="inherit">
                      {card.nombreHijo}
                    </Typography></center>
                    <br></br>
                    <Typography variant='h6' variant='inherit'>
                      Vacuna: {card.vacuna}
                    </Typography>
                    <Typography variant='h6' variant='inherit'>
                      Dosis: {card.dosis}
                    </Typography>
                    <Typography variant='h6' variant='inherit'>
                      Lugar: {card.lugar}
                    </Typography>
                    <Typography variant='h6'variant='inherit'>
                      Fecha de Vacunacion: {card.fechaVacunacion}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <br/>
          <br/>
        

                <TextField
                  id="hijo"
                  select
                  label="Seleccionar Hijo"
                  fullWidth
                  type="Seleccionar Hijo"
                  name="Seleccionar Hijo"
                  value={hijos}
                  onChange={handleChangeHijos}
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "hijo",
                    onChange: (event) => handleChangeHijos(event),
                  }}
                  >
                  {ARRAYHIJOS.map((option) => (
                  <MenuItem key={option.name} value={option.name}>
                  {option.name}
                  </MenuItem>
                  ))}
                </TextField>
                <br/>
                <br/>
                <TextField
                  id="vacuna"
                  select
                  label="Vacuna"
                  fullWidth
                  type="vacuna"
                  name="vacuna"
                  value={vacuna}
                  onChange={handleChangeVacuna}
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "vacuna",
                    onChange: (event) => handleChangeVacuna(event),
                  }}
                  >
                  {vacunas.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                  {option.label}
                  </MenuItem>
                  ))}
                </TextField>
                <br/>
                <br/>
                <TextField
                  id="dosis"
                  select
                  label="Dosis"
                  fullWidth
                  type="dosis"
                  name="dosis"
                  value={dosis}
                  onChange={handleChangeDosis}
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "vacuna",
                    onChange: (event) => handleChangeDosis(event),
                  }}
                  >
                  {dosiss.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                  {option.label}
                  </MenuItem>
                  ))}
                </TextField>
                <br/>
                <br/>

                <TextField
                  id="lugar"
                  label="Lugar"
                  fullWidth
                  type="lugar"
                  name="lugar"
                  value={lugar}
                  onChange={handleChangelugar}
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "lugar",
                    onChange: (event) => handleChangelugar(event),
                  }}
                  >
                </TextField>
                <br/>
                  <br/>
                  <br/>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Fecha de Vacunacion"
                    value={fechaVacunacion}
                    fullWidth
                    onChange={(fechaVacunacion) => {
                      setfechaVacunacion(fechaVacunacion);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "fechaVacunacion",
                      onChange: (event) => handleChangefechaVacunacion(event),
                    }}
                  />
                </LocalizationProvider>    

                <br/>
                <br/>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => {vacunado()}}
                >
                  Registrar Vacuna
                </Button>

                <br/>
                <br/>
                </Container>
                </center>

                
        </Container>
      </React.Fragment>
      </div>
  
  
    );
  }
  
  
  export default VisitasPediatricas;