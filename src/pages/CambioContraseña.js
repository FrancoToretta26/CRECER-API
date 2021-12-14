
    import React from 'react';
    import Button from '@material-ui/core/Button';
    import CssBaseline from '@material-ui/core/CssBaseline';
    import TextField from '@material-ui/core/TextField';
    import Link from '@material-ui/core/Link';
    import Paper from '@material-ui/core/Paper';
    import Box from '@material-ui/core/Box';
    import Grid from '@material-ui/core/Grid';
    import Typography from '@material-ui/core/Typography';
    import { makeStyles } from '@material-ui/styles';
    import Icono from "../img/OlvidoContraseña.png";

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
    
    export default function SignUpSide() {
      const classes = useStyles();
    
      return (
        <Grid container component="registromain" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
            <br/>
            <br/>
            <br/>
            <img src={Icono} width="55" height="55"/>          
            <Typography component="h1" variant="h5">
                Cambiar Contraseña
              </Typography>
              <form className={classes.form} noValidate>
              
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="Contraseña"
                  label="Contraseña"
                  name="Contraseña"
                  autoComplete="Contraseña"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="Confirme Contraseña"
                  label="Confirme Contraseña"
                  name="Confirme Contraseña"
                  autoComplete="Confirme Contraseña"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="Nueva Contraseña"
                  label="Nueva Contraseña"
                  type="Nueva Contraseña"
                  id="Nueva Contraseña"
                  autoComplete="Nueva Contraseña"
                />
                          <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="Nueva Contraseña"
                  label="Nueva Contraseña"
                  type="Nueva Contraseña"
                  id="Nueva Contraseña"
                  autoComplete="Nueva Contraseña"
                />
            
              
    
                <br/> 
                <br/>


<Button 
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Cambiar Contraseña
                </Button>
                <br/>
                <br/>




                <Grid container>
                </Grid>
                <Box mt={5}>
                  <Copyright />
                </Box>
              </form>
            </div>
          </Grid>
        </Grid>
      );
    }
    