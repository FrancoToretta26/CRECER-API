import React, { useEffect } from "react";
import {Redirect} from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockIcon from '@material-ui/icons/Lock';
// core components
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Button from "../components/CustomButtons/Button.js";
import Card from "../components/Card/Card";
import CardBody from "../components/Card/CardBody.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardFooter from "../components/Card/CardFooter.js";
import CustomInput from "../components/CustomInput/CustomInput.js";
import styles from   "../components/css/loginPage.js";
import image from "../img/landing-bg.jpg";

//importo llamada a endpoint
import {login} from "../controller/miApp.controller";

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
  const redirect= ()=>{
    if (usuarioValido) {

      return <Redirect to='/Main' />
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

    
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes[cardAnimaton]}>
            <form className={classes.form}>
              <CardHeader color="primary" className={classes.cardHeader}>
                <h4>Inicio Sesion</h4>
                <div className={classes.socialLine}>
                  
                </div>
              </CardHeader>
              <p className={classes.divider}>Ingresa tus datos para comenzar</p>
              <CardBody>
                
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
