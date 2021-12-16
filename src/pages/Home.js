import "../App.css";
import {
  Container,
} from 'reactstrap';
import Carrusel from "../components/carrusel";
import Card from "../components/cards/card";
import Footer from "../components/footer";
import SocialMedia from "../components/socialmedia";
import React from "react";
import Grid from '@material-ui/core/Grid';
import Card2 from "../components/cards/card2";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Card4 from "../components/cards/card4";
import Navbar from "../components/menu/Navbarmenu";



function Home() { 
  return (
    <div className="PediatrAR">
    <React.Fragment>
      <Navbar></Navbar>
      <CssBaseline />
      <Container maxWidth="false">
        <Typography component="div" style={{ backgroundColor: '#F8F8FF', height: '150' }}>
        <center>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Carrusel />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Grid container spacing={0}>
          <Grid items xs={15} sm={6} md={4}>
            <Card/>
          </Grid>
          <Grid items xs={12} sm={6} md={4}>
            <Card2/>
          </Grid>
          <Grid items xs={12} sm={6} md={4}>
            <Card4/>
          </Grid>
        </Grid>
        </center>
        </Typography> 
      </Container>
      <br></br>
    <br></br>
    <SocialMedia/> 
    <Footer/>
    </React.Fragment>
    </div>


  );
}


export default Home;