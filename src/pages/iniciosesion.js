import React, { useEffect }  from 'react';
import {Redirect} from "react-router-dom";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Icono from "../img/iconoRegistro2.png";
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email";
import Card from "../components2/Card/Card";
import CardBody from "../components2/Card/CardBody.js";
import CardHeader from "../components2/Card/CardHeader.js";
import CardFooter from "../components2/Card/CardFooter.js";
import Navbar from "../components/menu/Navbarmenu";
//importo llamada a endpoint
import {login} from "../controller/miApp.controller";





function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        CRECER
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://www.queestudiar.org/wp-content/uploads/2017/10/pediatra.jpeg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

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

      return <Redirect to='/home' />
    }

  } 
  

  return (
    <div
        className={classes.pageHeader}
      >
    {redirect()}  
    <div className={classes.container}>
      <Navbar/>
      <Grid container>
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Card className={classes[cardAnimaton]}>
          <form className={classes.form}>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4>Ingreso al Sistema</h4>
                  <div className={classes.socialLine}>
                    
                  </div>
                </CardHeader>
                <CardBody>
                <br/>
                <br/>
                <br/>
                <img src={Icono} width="35" height="35"/>          
                  <Typography component="h1" variant="h5">
                    Ingresar
                  </Typography>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Correo Electrónico"
                      name="email"
                      autoComplete="email"
                      autoFocus
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
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Contraseña"
                      type="password"
                      id="pass"
                      autoComplete="current-password"
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
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Recordarme"
                    />
                    <CardFooter className={classes.cardFooter}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={loginUser}
                    >
                      Ingresar
                    </Button></CardFooter>
                    <Grid container>
                      <Grid item xs>
                        <Link href="/olvido-contraseña" variant="body2">
                          ¿Olvidaste tu contraseña?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href="/registro" variant="body2">
                          {"¿No tenes una cuenta? Registrate"}
                        </Link>
                      </Grid>
                    </Grid>
                    
                    <Box mt={5}>
                      <Copyright />
                    </Box>
            </CardBody>
        </Grid>
        </form>
        </Card>
      </Grid>
      </div></div>
    );
  }