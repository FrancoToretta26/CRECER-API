import CalendarioVacunacion from "../components/imageZoom";       
import "../App.css";
import {
  Container,
} from 'reactstrap';
import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import ControlPediatricoImg from '../img/ControlPediatrico.jpg'
import ControlPediatricoImg2 from '../img/ControlPediatrico2.jpg'

function ControlPediatrico() { 
    return (
      <div className="PediatrAR">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="false">
        <center>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <img src={ControlPediatricoImg}/>
        <br/>
        <text className="letraTexto">Las visitas al pediatra no solo deben hacerse en caso de enfermedad, sino que también son importantes para los niños sanos. Cada control pediátrico incluye un examen físico completo. En este examen, el médico verifica el crecimiento y desarrollo del bebé o del niño con el fin de encontrar o prevenir problemas.</text>
        <br/>
        <br/>
        <text className='h1'>¿Cuál es la importancia del control pediátrico en un niño sano?</text>
        <br/>
        <br/>
        <text className='letraTexto'>Se define crecimiento como el aumento de tamaño del organismo. Desarrollo, en cambio, es la aparición de nuevas características o la adquisición de nuevas habilidades.

El control periódico del niño es fundamental para el crecimiento y desarrollo en salud, al igual que para detectar patologías y el seguimiento de las enfermedades crónicas.

Es muy importante que la detección de alguna desviación de la normalidad en esos aspectos se haga en forma temprana, para mejorar el pronóstico del niño, y poder aprovechar el potencial que es mayor cuanto menor edad tenga el paciente, y menos evolucionada esté la enfermedad.</text>
        <br/>
        <br/>
        <br/>
        <text className='h1'>¿Qué se hace en el control?</text>
        <br/>
        <br/>
        <text className='letraTexto'>En el control de salud se toman las medidas antropométricas de peso, talla, perímetro cefálico, entre otras. Se miden los signos vitales. Pero no solo es pesar y medir al niño. Va mucho más allá de ello. El pediatra realiza una anamnesis sobre antecedentes relevantes familiares, sociales y personales. Hace un examen físico minucioso sobre todos los aparatos y sistemas, registrando anormalidades, e incluso va más allá de lo evidente y analiza vínculos familiares, apego, etc. 
        
        Mientras examina al niño, ve como se desenvuelve, si cumple sus pautas madurativas y como se relaciona con el entorno. El pediatra debe “llegarle” al niño y ese es el mayor arte de un pediatra avezado.

En el control se aconseja sobre vacunas, sueño, alimentación saludable, juego, deportes, prevención de accidentes y todo lo que haga a la cotidianeidad del niño.</text>
<br/>
<text className='letraTexto'>Se indican las medidas profilácticas y preventivas necesarias y obligatorias, como el aporte de hierro y vitaminas en lactantes.

El pediatra es una guía para la crianza del niño, enseña los cuidados que necesita el mismo, evacua dudas a los adultos y adapta sus métodos a la realidad de esa familia en particular.

El control de salud debe hacerse en una situación basal, óptima y lo más allegado a la normalidad del niño. Se debe evitar el tan común, en una consulta por enfermedad “ya que estamos ¿no le hace el control de salud?”. Eso conduce a errores.</text>
<br/>
<br/>
<img src={ControlPediatricoImg2}/>
<br/>
<text className='h1'>¿Cada cuánto se realizan?</text>
        <br/>
        <br/>
<text className='letraTexto'>La periodicidad de los controles se hace en base a cada niño y su condición de salud. Hay, sin embargo, distintos esquemas de seguimiento estipulados.

 
<br/>
<br/>

<b>El más usado es:</b>
<br/>
A las 48 hs de vida (esto se hace en la internación conjunta de la madre y el niño).
<br/>
Dentro de los primeros 10 días.
<br/>
Al mes de vida.
<br/>
Luego 1 vez por mes del segundo mes al año de vida.
<br/>
Luego cada 2 meses a los 14, 16 y 18 meses.
<br/>
Luego cada 3 meses a los 21 y 24 meses.
<br/>
Cada 6 meses a los 30 y 36 meses.
<br/>
Luego de los 3 años 1 vez por año.</text>
<br/>
<br/>
<text className='h1'>¿Qué otros controles se realizan?</text>
<br/>
<br/>
<text className='letraTexto'>El servicio de pediatría cumple con las pruebas complementarias obligatorias en las leyes vigentes, con el aval de la Sociedad Argentina de Pediatría. Se apoya en subespecialistas y exámenes complementarios.
Al recién nacido se le pide la “prueba de la audición” (otoemisiones acústicas), la “prueba del talón” (búsqueda de errores congénitos del metabolismo). Más adelante y según factores de riesgo se piden exámenes para evaluar sus caderas.</text>
<br/>
<br/>
<text className='letraTexto'>Se hacen periódicamente exámenes por oftalmología, odontología, otorrinolaringología y por todo aquel especialista y prueba complementaria que se considere, para cumplir con los controles obligatorios para cada edad en general, y los adecuados para cada niño en particular. </text>
<br/>
<br/>
<br/>    
        </center>
        </Container>
      </React.Fragment>
      </div>
  
  
    );
  }
  
  
  export default ControlPediatrico;