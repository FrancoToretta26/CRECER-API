import React from 'react';
import { makeStyles } from "@material-ui/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";
import Logo from "../img/PediatrAR5.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" href="/">
          <img src={Logo} width="50" height="50" />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            CRECER
          </Typography>
          <Button color="inherit" href="/home"><b>Quienes Somos</b>
          </Button>
          <Button color="inherit"><b>Conocenos</b></Button>
          <Button color="inherit"><b>Controles</b></Button>
          <Button variant="contained" color="secondary" href="/login">
          <b>Ingresar</b>
          </Button>
          <br></br>
          <Button variant="contained" href="/registro"><b>Registrarme</b></Button>
      
        </Toolbar>
      </AppBar>
    </div>
  );
}
