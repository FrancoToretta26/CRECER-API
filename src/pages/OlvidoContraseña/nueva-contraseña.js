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
import Icono from "../../img/OlvidoContraseña.png";
import {updateUser} from "../../controller/user.controller"


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
    backgroundImage: 'url(https://raisingchildren.net.au/__data/assets/image/0033/48939/parents-technology-use.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const [password, setPassword] =React.useState('');
  const [confirmpassword, setConfirmPassword] =React.useState('');

  const handlePassword=(event)=>{
    setPassword(event.target.value);
  }

  const handleConfirmPassword=(event)=>{
    setConfirmPassword(event.target.value);
  }

  const updateUserFunc= async function()
{
    let datos = {
      email: localStorage.getItem('destinatario'),
      password: password,
    }
    let getUpdate = await updateUser(datos)
  
}  




  return (
    <Grid container component="loginmain" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <br></br>  <br></br>  <br></br>  <br></br> 
        <img src={Icono} width="45" height="45x"/>    
          <Typography component="h1" variant="h5">
            Ingrese Nueva Contraseña
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Nueva Contraseña"
              name="password"
              autoComplete="password"
              autoFocus
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "password",
                onChange: (event) => handlePassword(event),
              }}
            />
                       <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="confirm-np"
              label="Confirmar contraseña"
              name="confirm-np"
              autoComplete="confirm-np"
              autoFocus
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "confirmpassword",
                onChange: (event) => handleConfirmPassword(event),
              }}
            />
            <Button href="/login"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={updateUserFunc}
              className={classes.submit}
            >
              Enviar
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}