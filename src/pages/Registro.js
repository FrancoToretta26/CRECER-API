import React from 'react';
import Avatar from '@material-ui/core/Avatar';
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
import { Form, Field } from "@leveluptuts/fresh";
import MenuItem from '@material-ui/core/MenuItem';
import Icono from "../img/iconoRegistro.png";
import Footer from "../components/footer"
import SocialMedia from '../components/socialmedia';
import DropdownPreguntaSeguridad from '../components/dropdownsMenu/dropdownPreguntaSeguridad'
import Navbar from "../components/menu/Navbarmenu";

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
    backgroundImage: 'url(https://www.psicologosaldaia.com/wp-content/uploads/2017/10/medico-habla-ni%C3%B1o.jpg)',
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

export default function SignUpSide() {
  const classes = useStyles();

  return (
    <div>
    <Navbar/>
    <Grid container component="registromain" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <br/>
        <br/>
        <br/>
        <img src={Icono} width="35" height="35"/>          
        <Typography component="h1" variant="h5">
            Registrate
          </Typography>
          <form className={classes.form} noValidate>
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="nombre"
              label="Nombre"
              name="nombre"
              autoComplete="nombre"
              autoFocus
            />
               <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="apellido"
              label="Apellido"
              name="apellido"
              autoComplete="Apellido"
              autoFocus
            />
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
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Contraseña"
              label="Contraseña"
              type="Contraseña"
              id="Contraseña"
              autoComplete="Contraseña"
            />
                      <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="DNI"
              label="DNI"
              type="DNI"
              id="DNI"
              autoComplete="DNI"
            />
                                  <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="celphone"
              label="Numero de Celular"
              type="celphone"
              id="celphone"
              autoComplete="celphone"
            />
            <br/>
            <br/>
            <DropdownPreguntaSeguridad/>
                <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="respuesta-seguridad"
              label="Respuesta de Seguridad"
              type="respuesta-seguridad"
              id="respuesta-seguridad"
              autoComplete="Respuesta de Seguridad"
            />    

          

            <br/> 
          <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Acepto la Política de Privacidad del sitio"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Registrarme
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"¿Ya tenes una cuenta? Ingresa"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid></div>
  );
}
