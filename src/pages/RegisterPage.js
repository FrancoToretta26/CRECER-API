import React, { useEffect } from "react";
import {Redirect} from "react-router-dom";
// @material-ui/core components2
import { makeStyles } from "@material-ui/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockIcon from '@material-ui/icons/Lock';
// core components2
import GridContainer from "../components2/Grid/GridContainer.js";
import GridItem from "../components2/Grid/GridItem.js";
import Button from "../components2/CustomButtons/Button.js";
import Card from "../components2/Card/Card";
import CardBody from "../components2/Card/CardBody.js";
import CardHeader from "../components2/Card/CardHeader.js";
import CardFooter from "../components2/Card/CardFooter.js";
import CustomInput from "../components2/CustomInput/CustomInput.js";
import styles from   "../components2/css/loginPage.js";
import image from "../img/landing-bg.jpg";
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Navbar from "../components/menu/Navbarmenu";



//importo llamada a endpoint
import {registro} from "../controller/user.controller";

const useStyles = makeStyles(styles);

export default function RegisterPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [email,setEmail]=React.useState('');
  const [name, setName] =React.useState('')
  const [dni, setDNI] =React.useState('')
  const [numeroCelular, setnumeroCelular] =React.useState('')
  const [preguntaSeguridad, setpreguntaSeguridad] =React.useState('')
  const [respuestaSeguridad, setrespuestaSeguridad] = React.useState('')
  const[password,setPassword]=React.useState('');
  const[usuarioValido,setUsuarioValido]=React.useState(false);
  
  setTimeout(function() {
    setCardAnimation("");
  }, 100);
 
  const classes = useStyles();
  const { ...rest } = props;

  const handleName=(event)=>{
    setName(event.target.value);
  }

  const handleDNI=(event)=>{
    setDNI(event.target.value);
  }

  const handlenumeroCelular=(event)=>{
    setnumeroCelular(event.target.value);
  }

  const handlepreguntaSeguridad=(event)=>{
    setpreguntaSeguridad(event.target.value);
  }

  const handlerespuestaSeguridad=(event)=>{
    setrespuestaSeguridad(event.target.value);
  }

  const handleEmail=(event)=>{
      setEmail(event.target.value);
  }
  const handlePassword=(event)=>{    
      setPassword(event.target.value);
  }
  
  const preguntaSeg = [
    {
      value: '¿Cuál es el nombre de tu primera calle?',
      label: '¿Cuál es el nombre de tu primera calle?',
    },
    {
      value: '¿Cuál es el nombre de tu madre?',
      label: '¿Cuál es el nombre de tu madre?',
    },
    {
      value: '¿Cúal es el nombre de tu primera mascota?',
      label: '¿Cúal es el nombre de tu primera mascota?',
    },
    {
      value: '¿Cúal es tu apodo?',
      label: '¿Cúal es tu apodo?',
    },
  ];
  const [preguntaDropdown, setpreguntaDropdown] = React.useState('');
  const handleChangePregunta = (event) => {
    setpreguntaDropdown(event.target.value);
    };
  
  //Valido campos y llamo endpoint
  const loginUser= async function()
  {
    if (email!=="" && password!=="" && name!=="" && numeroCelular!==""  && dni!=="")
    {
      let datos = {
        email: email,
        password:password,
        name: name,
        numeroCelular: numeroCelular,
        dni: dni,
      }
      setUsuarioValido(true);
      let nuevoRegistro = await registro(datos)
      if(nuevoRegistro){
        alert('Se ha registrado con exito');
      }
      if(!nuevoRegistro){
        alert('El mail ingresado ya posee una cuenta, intentelo nuevamente');
      }
    }
    else
    {
      alert("Debe completar los campos vacios");
    }
    
    
  }  
  const redirect= ()=>{
    if (usuarioValido) {

      return <Redirect to='/' />
    }

  } 
  
  return (
    <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
    {redirect()}  
    <Navbar/>    
    
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes[cardAnimaton]}>
            <form className={classes.form}>
              <CardHeader color="primary" className={classes.cardHeader}>
                <h4>Registro</h4>
                <div className={classes.socialLine}>
                  
                </div>
              </CardHeader>
              <p className={classes.divider}>Ingresa tus datos para comenzar</p>
              <CardBody>
                
                <CustomInput
                  labelText="Nombre Completo"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "name",
                    onChange: (event) => handleName(event),
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={classes.inputIconsColor} />
                      </InputAdornment>
                    )
                  }}
                />
                                  <CustomInput
                  labelText="Mail..."
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (event) => handleEmail(event),
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={classes.inputIconsColor} />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                  labelText="Contraseña"
                  id="pass"
                  value=""
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "password",
                    onChange: (event) => handlePassword(event),
                    endAdornment: (
                      <InputAdornment position="end">
                         <LockIcon className={classes.inputIconsColor} />
                      </InputAdornment>
                    ),
                    autoComplete: "off"
                  }}
                />
                                  <CustomInput
                  labelText="DNI"
                  id="DNI"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "DNI",
                    onChange: (event) => handleDNI(event),
                    endAdornment: (
                      <InputAdornment position="end">
                      </InputAdornment>
                    )
                  }}
                />

                  <CustomInput
                  labelText="Numero de Celular"
                  id="numeroCelular"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "numeroCelular",
                    onChange: (event) => handlenumeroCelular(event),
                    endAdornment: (
                      <InputAdornment position="end">
                      </InputAdornment>
                    )
                  }}
                />
                
              </CardBody>
              <CardFooter className={classes.cardFooter}>
                <Button 
                  simple color="primary" 
                  size="lg"
                  onClick={loginUser}
                >
                  Comenzamos
                </Button>
              </CardFooter>
            </form>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
    </div>        
  );
}
