import React,{useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/styles";
// @material-ui/icons
// core components
//import Button from "components/CustomButtons/Button.js";
import GridContainer from "./Grid/GridContainer.js";
import GridItem from "./Grid/GridItem.js";
import CustomFileInput from "./CustomFileInput/CustomFileInput.js";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'
import Button from "./CustomButtons/Button.js";
import CardTemaBoton from "./Card/CardTemaBoton";
import CartTema from "./Card/CardTema";

//url video
import {urlImgUser} from "../controller/constants";
import {getImagenesByUser,uploadFileImg,guardarImgUser} from "../controller/miApp.controller";

import styles from "./css/profilePage.js";



const useStyles = makeStyles(styles);

export default function VideosPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  
  const [listaImagenes,setListaImagenes]=React.useState([]);
  const [imgAux,setImgAux]= React.useState('');
  
  console.log("cargacomponente");
  useEffect(()=>{
    async function componentDidMount() 
    {
      //traer imagenes de User
      let rdo = await getImagenesByUser();
      setListaImagenes(rdo); 
    }
    componentDidMount();
  },[]);
 
  const getImagenes = async function (){
    console.log("Voy a buscar imagenes")
    console.log("listaImagenesGetImg",listaImagenes)
    let rdo = await getImagenesByUser();
    setListaImagenes(rdo);
    
    console.log("listaImagenesGetImg",listaImagenes)
    console.log("rdoGetImagenesGetImg",rdo)
    
  }
  const guardarImagen=()=>{
    subirImagen();
  }
  const subirImagen= async function ()
  {
    let files=[];
    let nombres=[];
    let archivoImagen = '';
    
    if (imgAux!=='')
    {
      console.log("imgAux",imgAux);
      files.push(imgAux);
      //buscar extension archivo
      let archivoOrig = imgAux.name;
      let posExt = archivoOrig.indexOf('.');
      let extension = archivoOrig.substring(posExt,archivoOrig.length);
      let aleatorio = Math.random().toString().substring(2,15);
      nombres.push("img"+localStorage.getItem('nombre')+"_"+aleatorio+extension);
      //subir archivo a servidor
      archivoImagen = await uploadFileImg(files,nombres);
      //Si la imagen se subio bien la guardo en la BD
      if (archivoImagen.ok)
      {
        let imgUser={
          email:localStorage.getItem('email'),
          imagen: nombres[0]
        }
        let rdo = await guardarImgUser(imgUser);
        if (rdo)
        {
          alert("Tu imagen se ha almacenado correctamente.")
          getImagenes();
        }
      }
      else
      {
        alert ("Ocurrio un error al subir tu imagen al servidor. Intenta mas tarde.")
      } 
    }
  }
 
  const mostrarImagenes = ()=>{
    console.log("ListaImagenesMostrarImg:",listaImagenes);
    if (listaImagenes.length==0)
    {
      return (
        <GridItem xs={12} sm={12} md={12}>
        <div className={classes.profile}>
          
          <div className={classes.name}>
            <h3 className={classes.title}> Aun no has subido tus imagenes</h3>      
          </div>
        </div>
      </GridItem>
      )
    }
  }
  
  return (
    <div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            
            <GridContainer>
              {mostrarImagenes()}
              {listaImagenes.map(imagen => {          
                let mostrarImg = imagen.nombreImagen;
                let fecha = imagen.date.substring(0,10);
                console.log("mostrarIMg",mostrarImg);
                return (
                  <GridItem xs={12} sm={4} md={4} className={classes.GridItem}>
                    <CardTemaBoton
                      color={"gray"}
                      backImg={mostrarImg}
                      titulo={fecha}
                      subtitulo={""}
                      colorBoton= "rose"
                    >  
                    </CardTemaBoton>
                    
                  </GridItem>
                );
                })}
            </GridContainer>
            <GridContainer>
            <GridItem xs={12} sm={12} md={12}
             className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }>
              <h3 className={classes.title}>Podes subir las imagenes que muestren tu evolucion.</h3>                      
            </GridItem>
            <GridItem md={12} sm={12} xs={12}>
              <CustomFileInput
                    className={classes.footerButtons}
                    formControlProps={{
                      fullWidth: true
                     }}
                    getImagen={(i)=>setImgAux(i)}
                    inputProps={{ 
                      placeholder: "Selecciona la imagen a subir. Recorda que el tamaño maximo de la imagen es 3MB."
                      
                      }}
                    endButton={{
                      buttonProps: {
                      round: true,
                      color: "primary",
                      justIcon: true,
                      fileButton: true
                      },
                    icon: <AddAPhotoIcon />
                  }}
                  />
              </GridItem>
            
              <GridItem xs={12} sm={12} md={12}>
              <Button 
                color="primary"
                onClick= {()=>{guardarImagen()}}
                >
                Subir imagen
              </Button>
              </GridItem>
            
            </GridContainer>
          </div>
        </div>
      </div>
      
    </div>
  );
}
