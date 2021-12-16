import DatePicker from "../components/datepicker";
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
    import Icono from "../img/ModificarPerfil.png";
    import Footer from "../components/footer"
    import SocialMedia from '../components/socialmedia';
    import NavbarLog from "../components/menu/Navbarmenu";

    import {updateUser} from "../controller/miApp.controller";

    
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
    
    
    const securityQuestions = [
      {label:"¿Cual es el nombre de tu primera mascota?"},
      {label:"¿Cual fue el nombre de tu escuela primaria?"},
      {label:"¿Cual es el apellido de soltera de tu madre?"},
      {label:"¿Cual es el nombre de la ciudad donde naciste?"}
    ];
    
    
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
    
    export default function SignUpSide(props) {
      const classes = useStyles();
      const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
      const [name,setName]=React.useState('')
      const [email, setEmail] =React.useState('');
      const [password, setPassword] =React.useState('');

      setTimeout(function() {
        setCardAnimation("");
      }, 100);
     
      const { ...rest } = props;
    
      const handleName=(event)=>{
        setName(event.target.value);
      }
      const handleEmail=(event)=>{
        setEmail(event.target.value);
      }
    
      const handlePassword=(event)=>{
        setPassword(event.target.value);
      }

      //Valido campos y llamo endpoint
    const updateUserFunc= async function()
 {
     let datos = {
       email: email,
       password: password,
     }
     let getUpdate = await updateUser(datos)
   
 }  
    
      return (
        <div>
          <NavbarLog/>
        <Grid container component="registromain" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <img src={Icono} width="55" height="55"/>          
            <Typography component="h1" variant="h5">
                Modificar Perfil
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="email"
                  label="Correo Electrónico"
                  type="email"
                  id="email"
                  autoComplete="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (event) => handleEmail(event),
                  }}
                />
                          <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="password"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "password",
                    onChange: (event) => handlePassword(event),
                  }}
                />
            
              
    
                <br/> 
                <br/>
                <br/>
                <br/>

    
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={updateUserFunc}
                >
                  Modificar Perfil
                </Button>


                <Grid container>
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
    