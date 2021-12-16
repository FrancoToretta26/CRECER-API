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
import Navbar from "../components/menu/Navbarmenu";


//importo llamada a endpoint
import {login, getUsers, getHijosByName, getvacunasByMail} from "../controller/miApp.controller";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [email,setEmail]=React.useState('');
  const[password,setPassword]=React.useState('');
  const[usuarioValido,setUsuarioValido]=React.useState(false);
  
  setTimeout(function() {
    setCardAnimation("");
  }, 100);
 
  const classes = useStyles();
  const { ...rest } = props;

  const handleEmail=(event)=>{
      setEmail(event.target.value);
  }
  const handlePassword=(event)=>{    
      setPassword(event.target.value);
  }
  
  
  //Ejecuto el endopoint para validar login
  const validarLogin= async function()
  {
      let datos = {
        email: email,
        password:password
      }
      let getLogin = await login(datos);
      if (getLogin.rdo===0 )
      {
        setUsuarioValido(true);
      }
      if (getLogin.rdo===1)
      {
        alert(getLogin.mensaje)
      }
      
  }
  
  //Valido campos y llamo endpoint
  const loginUser=()=>
  {
    if (email!=="" && password!=="")
    {
      validarLogin();
    }
    else
    {
      alert("Debe completar usuario y password");
    }
    
    
  } 
  
  const obtenerUser= async function()
  {
    let usuarios = await getUsers()
    console.log(usuarios)
  }

  const mostrarTodo= async function()
  {
      let getVacunas = await getvacunasByMail()
      let getRegistro = await getHijosByName()
  }


  const redirect= ()=>{
    if (usuarioValido) {
      mostrarTodo();


      return <Redirect to='/home' />
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
                <h4>Ingreso al Sistema</h4>
                <div className={classes.socialLine}>
                  
                </div>
              </CardHeader>
              <p className={classes.divider}>Ingresa tus datos para comenzar</p>
              <CardBody>
                
                <CustomInput
                  labelText="Correo Electronico"
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
              </CardBody>
              <CardFooter className={classes.cardFooter}>
                <Button 
                  simple color="primary" 
                  size="lg"
                  onClick={loginUser}
                >
                  Ingresar
                </Button>
              </CardFooter>
              <CardFooter className={classes.cardFooter}>
                <Button 
                  simple color="primary" 
                  size="lg"
                  onClick={obtenerUser}
                  href="/olvido-contraseña"
                >
                  Olvide mi contraseña
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
