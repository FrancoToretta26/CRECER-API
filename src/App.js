import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";  
import React, {useState} from "react";
import Home from "./pages/Home"
import QuienesSomos from "./pages/quienesomos";
import Login from "./pages/LoginPage";
import Registro from "./pages/RegisterPage"
import Footer from "./components/footer";
import Navbarmenu from './components/menu/Navbarmenu';
import NavbarmenuLog from './components/menu/NavbarmenuLog';
import VisitasPediatricas from './pages/VisitasPediatricas';
import Contacto from "./pages/Contact";
import OlvidoContraseña from "./pages/OlvidoContraseña/olvido-contraseñaDNI";
import OlvidoContraseñaSQ from "./pages/OlvidoContraseña/olvido-contraseñaSQ";
import NuevaContraseña from "./pages/OlvidoContraseña/nueva-contraseña";
import ModificarPerfil from "./pages/modificarPerfil";
import CalendarioVacunacionLog from "./pages/calendarioVacunacionLog";
import CalendarioVacunacion from "./pages/calendarioVacunacion";
import CalculoPercentilLog from "./pages/calculoPercentilLog";
import CalculoPercentil from "./pages/calculoPercentil";
import AgregarNiño from "./pages/AgregarNiño";
import ControlPediatrico from './pages/ControlPediatrico'
import CambiarContraseña from "./pages/CambioContraseña"
import ModificarHijo from "./pages/modificarhijo"
import { createBrowserHistory } from "history";
import HomeLogueada from "./pages/HomeLogueado"
import Prueba from "./pages/prueba";


var hist = createBrowserHistory();
function App() {


  return (
    <>
     <Router history={hist}>
        <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/registro" component={Registro}/>
        <Route path="/login" component={Login}/>
        <Route path="/prueba" component={Prueba}/>
        <Route path="/modificar-niño" component={ModificarHijo}/>
          <Route path="/olvido-contraseña">
            <OlvidoContraseña/>
            <Footer/>
          </Route>
          <Route path="/olvido-contraseñaSQ">
            <OlvidoContraseñaSQ/>
            <Footer/>
          </Route>
          <Route path="/nueva-contraseña">
            <NuevaContraseña/>
            <Footer/>
          </Route>
          <Route path="/aboutus">
            <QuienesSomos/>
            <Footer/>
          </Route>
          <Route path="/contacto">
            <Contacto/>
            <Footer/>
          </Route>
          <Route path="/visitas-pediatricas">
            <ControlPediatrico/>
            <Footer/>
          </Route>
          <Route path="/visitas-pediatricasLog">
            <VisitasPediatricas/>
            <Footer/>
          </Route>
          <Route path="/modificar-perfil">
            <ModificarPerfil/>
            <Footer/>
          </Route>
          <Route path="/calendarioVacunacionLog">
            <CalendarioVacunacionLog/>
            <Footer/>
          </Route>
          <Route path="/calendarioVacunacion">
            <CalendarioVacunacion/>
            <Footer/>
          </Route>
          <Route path="/calculoPercentilesLog">
            <CalculoPercentilLog/>
            <Footer/>
          </Route>
          <Route path="/calculoPercentiles">
            <CalculoPercentil/>
            <Footer/>
          </Route>
          <Route path="/agregarNiño">
            <AgregarNiño/>
          </Route>
          <Route path="/cambioContraseña">
            <CambiarContraseña/>
          </Route>
          <Route path='/home' component={HomeLogueada}>
          </Route>
  


        </Switch>
    </Router>


    </>

  );
}


export default App;
