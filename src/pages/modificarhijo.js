import React, {useState} from "react";
import "../App.css";
import {
  Container,
} from 'reactstrap';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DatePicker from "../components/datepicker";
import Imagen from "../components/perfil/imagen";
import Button from '@material-ui/core/Button';
import DropdownMenuHijo from '../components/dropdownsMenu/dropdownMenuHijo'
import PercentilPeso from '../img/PercentilPeso.png'
import PercentilAltura from '../img/PercentilAltura'
import PercentilCabeza from '../img/PercentilCabeza.png';
import MenuItem from '@material-ui/core/MenuItem';
import { Card, Stack } from '@mui/material';
import { maxHeight } from "@material-ui/system";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { render } from "react-dom";
import { Icon } from '@iconify/react';
import {updateHijo, getHijosByName, getvacunasByMail} from "../controller/miApp.controller";
import NavbarLog from "../components/menu/Navbarmenu";


export default function CalculoPercentil(props) { 


  const [hijos, sethijosDropdown] = React.useState('');
  const handleChangeHijos = (event) => {
    sethijosDropdown(event.target.value);
  };
  const [altura, setalturaDropdown] = React.useState('');
  const handleChangeAltura = (event) => {
    setalturaDropdown(event.target.value);
  };

  const [peso, setpesoDropdown] = React.useState('');
  const handleChangePeso = (event) => {
    setpesoDropdown(event.target.value);
  };

  const [diametroCabeza, setdiametroCabezaDropdown] = React.useState('');
  const handleChangediametroCabeza= (event) => {
    setdiametroCabezaDropdown(event.target.value);
  };


  const pesos = [
    {value:'2.3kg',label:'2.3kg',},
    {value:'2.4kg',label:'2.4kg',},
    {value:'2.5kg',label:'2.5kg',},
    {value:'2.6kg',label:'2.6kg',},
    {value:'2.7kg',label:'2.7kg',},
    {value:'2.8kg',label:'2.8kg',},
    {value:'2.9kg',label:'2.9kg',},
    {value:'3.0kg',label:'3.0kg',},
    {value:'3.1kg',label:'3.1kg',},
    {value:'3.2kg',label:'3.2kg',},
    {value:'3.3kg',label:'3.3kg',},
    {value:'3.4kg',label:'3.4kg',},
    {value:'3.5kg',label:'3.5kg',},
    {value:'3.6kg',label:'3.6kg',},
    {value:'3.7kg',label:'3.7kg',},
    {value:'3.8kg',label:'3.8kg',},
    {value:'3.9kg',label:'3.9kg',},
    {value:'4.0kg',label:'4.0kg',},
    {value:'4.1kg',label:'4.1kg',},
    {value:'4.2kg',label:'4.2kg',},
    {value:'4.3kg',label:'4.3kg',},
    {value:'4.4kg',label:'4.4kg',},
    {value:'4.5kg',label:'4.5kg',},
    {value:'4.6kg',label:'4.6kg',},
    {value:'4.7kg',label:'4.7kg',},
    {value:'4.8kg',label:'4.8kg',},
    {value:'4.9kg',label:'4.9kg',},
    {value:'5.0kg',label:'5.0kg',},
    {value:'5.1kg',label:'5.1kg',},
    {value:'5.2kg',label:'5.2kg',},
    {value:'5.3kg',label:'5.3kg',},
    {value:'5.4kg',label:'5.4kg',},
    {value:'5.5kg',label:'5.5kg',},
    {value:'5.6kg',label:'5.6kg',},
    {value:'5.7kg',label:'5.7kg',},
    {value:'5.8kg',label:'5.8kg',},
    {value:'5.9kg',label:'5.9kg',},
    {value:'6.0kg',label:'6.0kg',},
    {value:'6.1kg',label:'6.1kg',},
    {value:'6.2kg',label:'6.2kg',},
    {value:'6.3kg',label:'6.3kg',},
    {value:'6.4kg',label:'6.4kg',},
    {value:'6.5kg',label:'6.5kg',},
    {value:'6.6kg',label:'6.6kg',},
    {value:'6.7kg',label:'6.7kg',},
    {value:'6.8kg',label:'6.8kg',},
    {value:'6.9kg',label:'6.9kg',},
    {value:'7.0kg',label:'7.0kg',},
    {value:'7.1kg',label:'7.1kg',},
    {value:'7.2kg',label:'7.2kg',},
    {value:'7.3kg',label:'7.3kg',},
    {value:'7.4kg',label:'7.4kg',},
    {value:'7.5kg',label:'7.5kg',},
    {value:'7.6kg',label:'7.6kg',},
    {value:'7.7kg',label:'7.7kg',},
    {value:'7.8kg',label:'7.8kg',},
    {value:'7.9kg',label:'7.9kg',},
    {value:'8.0kg',label:'8.0kg',},
    {value:'8.1kg',label:'8.1kg',},
    {value:'8.2kg',label:'8.2kg',},
    {value:'8.3kg',label:'8.3kg',},
    {value:'8.4kg',label:'8.4kg',},
    {value:'8.5kg',label:'8.5kg',},
    {value:'8.6kg',label:'8.6kg',},
    {value:'8.7kg',label:'8.7kg',},
    {value:'8.8kg',label:'8.8kg',},
    {value:'8.9kg',label:'8.9kg',},
    {value:'9.0kg',label:'9.0kg',},
    {value:'9.1kg',label:'9.1kg',},
    {value:'9.2kg',label:'9.2kg',},
    {value:'9.3kg',label:'9.3kg',},
    {value:'9.4kg',label:'9.4kg',},
    {value:'9.5kg',label:'9.5kg',},
    {value:'9.6kg',label:'9.6kg',},
    {value:'9.7kg',label:'9.7kg',},
    {value:'9.8kg',label:'9.8kg',},
    {value:'9.9kg',label:'9.9kg',},
    {value:'10.0kg',label:'10.0kg',},
    {value:'10.1kg',label:'10.1kg',},
    {value:'10.2kg',label:'10.2kg',},
    {value:'10.3kg',label:'10.3kg',},
    {value:'10.4kg',label:'10.4kg',},
    {value:'10.5kg',label:'10.5kg',},
    {value:'10.6kg',label:'10.6kg',},
    {value:'10.7kg',label:'10.7kg',},
    {value:'10.8kg',label:'10.8kg',},
    {value:'10.9kg',label:'10.9kg',},
    {value:'11.0kg',label:'11.0kg',},
    {value:'11.1kg',label:'11.1kg',},
    {value:'11.2kg',label:'11.2kg',},
    {value:'11.3kg',label:'11.3kg',},
    {value:'11.4kg',label:'11.4kg',},
    {value:'11.5kg',label:'11.5kg',},
    {value:'11.6kg',label:'11.6kg',},
    {value:'11.7kg',label:'11.7kg',},
    {value:'11.8kg',label:'11.8kg',},
    {value:'11.9kg',label:'11.9kg',},
    {value:'12.0kg',label:'12.0kg',},
    {value:'12.1kg',label:'12.1kg',},
    {value:'12.2kg',label:'12.2kg',},
    {value:'12.3kg',label:'12.3kg',},
    {value:'12.4kg',label:'12.4kg',},
    {value:'12.5kg',label:'12.5kg',},
    {value:'12.6kg',label:'12.6kg',},
    {value:'12.7kg',label:'12.7kg',},
    {value:'12.8kg',label:'12.8kg',},
    {value:'12.9kg',label:'12.9kg',},
    {value:'13.0kg',label:'13.0kg',},
    {value:'13.1kg',label:'13.1kg',},
    {value:'13.2kg',label:'13.2kg',},
    {value:'13.3kg',label:'13.3kg',},
    {value:'13.4kg',label:'13.4kg',},
    {value:'13.5kg',label:'13.5kg',},
    {value:'13.6kg',label:'13.6kg',},
    {value:'13.7kg',label:'13.7kg',},
    {value:'13.8kg',label:'13.8kg',},
    {value:'13.9kg',label:'13.9kg',},
    {value:'14.0kg',label:'14.0kg',},
    {value:'14.1kg',label:'14.1kg',},
    {value:'14.2kg',label:'14.2kg',},
    {value:'14.3kg',label:'14.3kg',},
    {value:'14.4kg',label:'14.4kg',},
    {value:'14.5kg',label:'14.5kg',},
    {value:'14.6kg',label:'14.6kg',},
    {value:'14.7kg',label:'14.7kg',},
    {value:'14.8kg',label:'14.8kg',},
    {value:'14.9kg',label:'14.9kg',},
    {value:'15.0kg',label:'15.0kg',},
    {value:'15.1kg',label:'15.1kg',},
    {value:'15.2kg',label:'15.2kg',},
    {value:'15.3kg',label:'15.3kg',},
    {value:'15.4kg',label:'15.4kg',},
    {value:'15.5kg',label:'15.5kg',},
    {value:'15.6kg',label:'15.6kg',},
    {value:'15.7kg',label:'15.7kg',},
    {value:'15.8kg',label:'15.8kg',},
    {value:'15.9kg',label:'15.9kg',},
    {value:'16.0kg',label:'16.0kg',},
    {value:'16.1kg',label:'16.1kg',},
    {value:'16.2kg',label:'16.2kg',},
    {value:'16.3kg',label:'16.3kg',},
    {value:'16.4kg',label:'16.4kg',},
    {value:'16.5kg',label:'16.5kg',},
    {value:'16.6kg',label:'16.6kg',},
    {value:'16.7kg',label:'16.7kg',},
    {value:'16.8kg',label:'16.8kg',},
    {value:'16.9kg',label:'16.9kg',},
    {value:'17.0kg',label:'17.0kg',},
    {value:'17.1kg',label:'17.1kg',},
    {value:'17.2kg',label:'17.2kg',},
    {value:'17.3kg',label:'17.3kg',},
    {value:'17.4kg',label:'17.4kg',},
    {value:'17.5kg',label:'17.5kg',},
    {value:'17.6kg',label:'17.6kg',},
    {value:'17.7kg',label:'17.7kg',},
    {value:'17.8kg',label:'17.8kg',},
    {value:'17.9kg',label:'17.9kg',},
    {value:'18.0kg',label:'18.0kg',},
    {value:'18.1kg',label:'18.1kg',},
    {value:'18.2kg',label:'18.2kg',},
    {value:'18.3kg',label:'18.3kg',},
    {value:'18.4kg',label:'18.4kg',},
    {value:'18.5kg',label:'18.5kg',},
    {value:'18.6kg',label:'18.6kg',},
    {value:'18.7kg',label:'18.7kg',},
    {value:'18.8kg',label:'18.8kg',},
    {value:'18.9kg',label:'18.9kg',},
    {value:'19.0kg',label:'19.0kg',},
    {value:'19.1kg',label:'19.1kg',},
    {value:'19.2kg',label:'19.2kg',},
    {value:'19.3kg',label:'19.3kg',},
    {value:'19.4kg',label:'19.4kg',},
    {value:'19.5kg',label:'19.5kg',},
    {value:'19.6kg',label:'19.6kg',},
    {value:'19.7kg',label:'19.7kg',},
    {value:'19.8kg',label:'19.8kg',},
    {value:'19.9kg',label:'19.9kg',},
    {value:'20.0kg',label:'20.0kg',},
    {value:'20.1kg',label:'20.1kg',},
    {value:'20.2kg',label:'20.2kg',},
    {value:'20.3kg',label:'20.3kg',},
    {value:'20.4kg',label:'20.4kg',},
    {value:'20.5kg',label:'20.5kg',},
    {value:'20.6kg',label:'20.6kg',},
    {value:'20.7kg',label:'20.7kg',},
    {value:'20.8kg',label:'20.8kg',},
    {value:'20.9kg',label:'20.9kg',},
    {value:'21.0kg',label:'21.0kg',},
    {value:'21.1kg',label:'21.1kg',},
    {value:'21.2kg',label:'21.2kg',},
    {value:'21.3kg',label:'21.3kg',},
    {value:'21.4kg',label:'21.4kg',},
    {value:'21.5kg',label:'21.5kg',},
    {value:'21.6kg',label:'21.6kg',},
    {value:'21.7kg',label:'21.7kg',},
    {value:'21.8kg',label:'21.8kg',},
    {value:'21.9kg',label:'21.9kg',},
    {value:'22.0kg',label:'22.0kg',},
    {value:'22.1kg',label:'22.1kg',},
    {value:'22.2kg',label:'22.2kg',},
    {value:'22.3kg',label:'22.3kg',},
    {value:'22.4kg',label:'22.4kg',},
    {value:'22.5kg',label:'22.5kg',},
    {value:'22.6kg',label:'22.6kg',},
    {value:'22.7kg',label:'22.7kg',},
    {value:'22.8kg',label:'22.8kg',},
    {value:'22.9kg',label:'22.9kg',},
    {value:'23.0kg',label:'23.0kg',},
    {value:'23.1kg',label:'23.1kg',},
    {value:'23.2kg',label:'23.2kg',},
    {value:'23.3kg',label:'23.3kg',},
    {value:'23.4kg',label:'23.4kg',},
    {value:'23.5kg',label:'23.5kg',},
    {value:'23.6kg',label:'23.6kg',},
    {value:'23.7kg',label:'23.7kg',},
    {value:'23.8kg',label:'23.8kg',},
    {value:'23.9kg',label:'23.9kg',},
    {value:'24.0kg',label:'24.0kg',},
    {value:'24.1kg',label:'24.1kg',},
    {value:'24.2kg',label:'24.2kg',},
    {value:'24.3kg',label:'24.3kg',},
    {value:'24.4kg',label:'24.4kg',},
    {value:'24.5kg',label:'24.5kg',},
    {value:'24.6kg',label:'24.6kg',},
    {value:'24.7kg',label:'24.7kg',},
    {value:'24.8kg',label:'24.8kg',},
    {value:'24.9kg',label:'24.9kg',},
    {value:'25.0kg',label:'25.0kg',},
    {value:'25.1kg',label:'25.1kg',},
    {value:'25.2kg',label:'25.2kg',},
    {value:'25.3kg',label:'25.3kg',},
    {value:'25.4kg',label:'25.4kg',},
    {value:'25.5kg',label:'25.5kg',},
    {value:'25.6kg',label:'25.6kg',},
    {value:'25.7kg',label:'25.7kg',},
    {value:'25.8kg',label:'25.8kg',},
    {value:'25.9kg',label:'25.9kg',},
    {value:'26.0kg',label:'26.0kg',},
    {value:'26.1kg',label:'26.1kg',},
    {value:'26.2kg',label:'26.2kg',},
  ];

  const alturas = [
    {value:'44.8cm',label:'44.8cm',},
    {value:'44.9cm',label:'44.9cm',},
    {value:'45.0cm',label:'45.0cm',},
    {value:'45.1cm',label:'45.1cm',},
    {value:'45.2cm',label:'45.2cm',},
    {value:'45.3cm',label:'45.3cm',},
    {value:'45.4cm',label:'45.4cm',},
    {value:'45.5cm',label:'45.5cm',},
    {value:'45.6cm',label:'45.6cm',},
    {value:'45.7cm',label:'45.7cm',},
    {value:'45.8cm',label:'45.8cm',},
    {value:'45.9cm',label:'45.9cm',},
    {value:'46.0cm',label:'46.0cm',},
    {value:'46.1cm',label:'46.1cm',},
    {value:'46.2cm',label:'46.2cm',},
    {value:'46.3cm',label:'46.3cm',},
    {value:'46.4cm',label:'46.4cm',},
    {value:'46.5cm',label:'46.5cm',},
    {value:'46.6cm',label:'46.6cm',},
    {value:'46.7cm',label:'46.7cm',},
    {value:'46.8cm',label:'46.8cm',},
    {value:'46.9cm',label:'46.9cm',},
    {value:'47.0cm',label:'47.0cm',},
    {value:'47.1cm',label:'47.1cm',},
    {value:'47.2cm',label:'47.2cm',},
    {value:'47.3cm',label:'47.3cm',},
    {value:'47.4cm',label:'47.4cm',},
    {value:'47.5cm',label:'47.5cm',},
    {value:'47.6cm',label:'47.6cm',},
    {value:'47.7cm',label:'47.7cm',},
    {value:'47.8cm',label:'47.8cm',},
    {value:'47.9cm',label:'47.9cm',},
    {value:'48.0cm',label:'48.0cm',},
    {value:'48.1cm',label:'48.1cm',},
    {value:'48.2cm',label:'48.2cm',},
    {value:'48.3cm',label:'48.3cm',},
    {value:'48.4cm',label:'48.4cm',},
    {value:'48.5cm',label:'48.5cm',},
    {value:'48.6cm',label:'48.6cm',},
    {value:'48.7cm',label:'48.7cm',},
    {value:'48.8cm',label:'48.8cm',},
    {value:'48.9cm',label:'48.9cm',},
    {value:'49.0cm',label:'49.0cm',},
    {value:'49.1cm',label:'49.1cm',},
    {value:'49.2cm',label:'49.2cm',},
    {value:'49.3cm',label:'49.3cm',},
    {value:'49.4cm',label:'49.4cm',},
    {value:'49.5cm',label:'49.5cm',},
    {value:'49.6cm',label:'49.6cm',},
    {value:'49.7cm',label:'49.7cm',},
    {value:'49.8cm',label:'49.8cm',},
    {value:'49.9cm',label:'49.9cm',},
    {value:'50.0cm',label:'50.0cm',},
    {value:'50.1cm',label:'50.1cm',},
    {value:'50.2cm',label:'50.2cm',},
    {value:'50.3cm',label:'50.3cm',},
    {value:'50.4cm',label:'50.4cm',},
    {value:'50.5cm',label:'50.5cm',},
    {value:'50.6cm',label:'50.6cm',},
    {value:'50.7cm',label:'50.7cm',},
    {value:'50.8cm',label:'50.8cm',},
    {value:'50.9cm',label:'50.9cm',},
    {value:'51.0cm',label:'51.0cm',},
    {value:'51.1cm',label:'51.1cm',},
    {value:'51.2cm',label:'51.2cm',},
    {value:'51.3cm',label:'51.3cm',},
    {value:'51.4cm',label:'51.4cm',},
    {value:'51.5cm',label:'51.5cm',},
    {value:'51.6cm',label:'51.6cm',},
    {value:'51.7cm',label:'51.7cm',},
    {value:'51.8cm',label:'51.8cm',},
    {value:'51.9cm',label:'51.9cm',},
    {value:'52.0cm',label:'52.0cm',},
    {value:'52.1cm',label:'52.1cm',},
    {value:'52.2cm',label:'52.2cm',},
    {value:'52.3cm',label:'52.3cm',},
    {value:'52.4cm',label:'52.4cm',},
    {value:'52.5cm',label:'52.5cm',},
    {value:'52.6cm',label:'52.6cm',},
    {value:'52.7cm',label:'52.7cm',},
    {value:'52.8cm',label:'52.8cm',},
    {value:'52.9cm',label:'52.9cm',},
    {value:'53.0cm',label:'53.0cm',},
    {value:'53.1cm',label:'53.1cm',},
    {value:'53.2cm',label:'53.2cm',},
    {value:'53.3cm',label:'53.3cm',},
    {value:'53.4cm',label:'53.4cm',},
    {value:'53.5cm',label:'53.5cm',},
    {value:'53.6cm',label:'53.6cm',},
    {value:'53.7cm',label:'53.7cm',},
    {value:'53.8cm',label:'53.8cm',},
    {value:'53.9cm',label:'53.9cm',},
    {value:'54.0cm',label:'54.0cm',},
    {value:'54.1cm',label:'54.1cm',},
    {value:'54.2cm',label:'54.2cm',},
    {value:'54.3cm',label:'54.3cm',},
    {value:'54.4cm',label:'54.4cm',},
    {value:'54.5cm',label:'54.5cm',},
    {value:'54.6cm',label:'54.6cm',},
    {value:'54.7cm',label:'54.7cm',},
    {value:'54.8cm',label:'54.8cm',},
    {value:'54.9cm',label:'54.9cm',},
    {value:'55.0cm',label:'55.0cm',},
    {value:'55.1cm',label:'55.1cm',},
    {value:'55.2cm',label:'55.2cm',},
    {value:'55.3cm',label:'55.3cm',},
    {value:'55.4cm',label:'55.4cm',},
    {value:'55.5cm',label:'55.5cm',},
    {value:'55.6cm',label:'55.6cm',},
    {value:'55.7cm',label:'55.7cm',},
    {value:'55.8cm',label:'55.8cm',},
    {value:'55.9cm',label:'55.9cm',},
    {value:'56.0cm',label:'56.0cm',},
    {value:'56.1cm',label:'56.1cm',},
    {value:'56.2cm',label:'56.2cm',},
    {value:'56.3cm',label:'56.3cm',},
    {value:'56.4cm',label:'56.4cm',},
    {value:'56.5cm',label:'56.5cm',},
    {value:'56.6cm',label:'56.6cm',},
    {value:'56.7cm',label:'56.7cm',},
    {value:'56.8cm',label:'56.8cm',},
    {value:'56.9cm',label:'56.9cm',},
    {value:'57.0cm',label:'57.0cm',},
    {value:'57.1cm',label:'57.1cm',},
    {value:'57.2cm',label:'57.2cm',},
    {value:'57.3cm',label:'57.3cm',},
    {value:'57.4cm',label:'57.4cm',},
    {value:'57.5cm',label:'57.5cm',},
    {value:'57.6cm',label:'57.6cm',},
    {value:'57.7cm',label:'57.7cm',},
    {value:'57.8cm',label:'57.8cm',},
    {value:'57.9cm',label:'57.9cm',},
    {value:'58.0cm',label:'58.0cm',},
    {value:'58.1cm',label:'58.1cm',},
    {value:'58.2cm',label:'58.2cm',},
    {value:'58.3cm',label:'58.3cm',},
    {value:'58.4cm',label:'58.4cm',},
    {value:'58.5cm',label:'58.5cm',},
    {value:'58.6cm',label:'58.6cm',},
    {value:'58.7cm',label:'58.7cm',},
    {value:'58.8cm',label:'58.8cm',},
    {value:'58.9cm',label:'58.9cm',},
    {value:'59.0cm',label:'59.0cm',},
    {value:'59.1cm',label:'59.1cm',},
    {value:'59.2cm',label:'59.2cm',},
    {value:'59.3cm',label:'59.3cm',},
    {value:'59.4cm',label:'59.4cm',},
    {value:'59.5cm',label:'59.5cm',},
    {value:'59.6cm',label:'59.6cm',},
    {value:'59.7cm',label:'59.7cm',},
    {value:'59.8cm',label:'59.8cm',},
    {value:'59.9cm',label:'59.9cm',},
    {value:'60.0cm',label:'60.0cm',},
    {value:'60.1cm',label:'60.1cm',},
    {value:'60.2cm',label:'60.2cm',},
    {value:'60.3cm',label:'60.3cm',},
    {value:'60.4cm',label:'60.4cm',},
    {value:'60.5cm',label:'60.5cm',},
    {value:'60.6cm',label:'60.6cm',},
    {value:'60.7cm',label:'60.7cm',},
    {value:'60.8cm',label:'60.8cm',},
    {value:'60.9cm',label:'60.9cm',},
    {value:'61.0cm',label:'61.0cm',},
    {value:'73.9cm',label:'73.9cm',},
    {value:'74.0cm',label:'74.0cm',},
    {value:'74.1cm',label:'74.1cm',},
    {value:'74.2cm',label:'74.2cm',},
    {value:'74.3cm',label:'74.3cm',},
    {value:'74.4cm',label:'74.4cm',},
    {value:'74.5cm',label:'74.5cm',},
    {value:'74.6cm',label:'74.6cm',},
    {value:'74.7cm',label:'74.7cm',},
    {value:'74.8cm',label:'74.8cm',},
    {value:'74.9cm',label:'74.9cm',},
    {value:'75.0cm',label:'75.0cm',},
    {value:'75.1cm',label:'75.1cm',},
    {value:'75.2cm',label:'75.2cm',},
    {value:'75.3cm',label:'75.3cm',},
    {value:'75.4cm',label:'75.4cm',},
    {value:'75.5cm',label:'75.5cm',},
    {value:'75.6cm',label:'75.6cm',},
    {value:'75.7cm',label:'75.7cm',},
    {value:'75.8cm',label:'75.8cm',},
    {value:'75.9cm',label:'75.9cm',},
    {value:'76.0cm',label:'76.0cm',},
    {value:'76.1cm',label:'76.1cm',},
    {value:'76.2cm',label:'76.2cm',},
    {value:'76.3cm',label:'76.3cm',},
    {value:'76.4cm',label:'76.4cm',},
    {value:'76.5cm',label:'76.5cm',},
    {value:'76.6cm',label:'76.6cm',},
    {value:'76.7cm',label:'76.7cm',},
    {value:'76.8cm',label:'76.8cm',},
    {value:'76.9cm',label:'76.9cm',},
    {value:'77.0cm',label:'77.0cm',},
    {value:'77.1cm',label:'77.1cm',},
    {value:'77.2cm',label:'77.2cm',},
    {value:'77.3cm',label:'77.3cm',},
    {value:'77.4cm',label:'77.4cm',},
    {value:'77.5cm',label:'77.5cm',},
    {value:'77.6cm',label:'77.6cm',},
    {value:'77.7cm',label:'77.7cm',},
    {value:'77.8cm',label:'77.8cm',},
    {value:'77.9cm',label:'77.9cm',},
    {value:'78.0cm',label:'78.0cm',},
    {value:'78.1cm',label:'78.1cm',},
    {value:'78.2cm',label:'78.2cm',},
    {value:'78.3cm',label:'78.3cm',},
    {value:'78.4cm',label:'78.4cm',},
    {value:'78.5cm',label:'78.5cm',},
    {value:'78.6cm',label:'78.6cm',},
    {value:'78.7cm',label:'78.7cm',},
    {value:'78.8cm',label:'78.8cm',},
    {value:'78.9cm',label:'78.9cm',},
    {value:'79.0cm',label:'79.0cm',},
    {value:'79.1cm',label:'79.1cm',},
    {value:'79.2cm',label:'79.2cm',},
    {value:'79.3cm',label:'79.3cm',},
    {value:'79.4cm',label:'79.4cm',},
    {value:'79.5cm',label:'79.5cm',},
    {value:'79.6cm',label:'79.6cm',},
    {value:'79.7cm',label:'79.7cm',},
    {value:'79.8cm',label:'79.8cm',},
    {value:'79.9cm',label:'79.9cm',},
    {value:'80.0cm',label:'80.0cm',},
    {value:'80.1cm',label:'80.1cm',},
    {value:'80.2cm',label:'80.2cm',},
    {value:'80.3cm',label:'80.3cm',},
    {value:'80.4cm',label:'80.4cm',},
    {value:'80.5cm',label:'80.5cm',},
    {value:'80.6cm',label:'80.6cm',},
    {value:'80.7cm',label:'80.7cm',},
    {value:'80.8cm',label:'80.8cm',},
    {value:'80.9cm',label:'80.9cm',},
    {value:'81.0cm',label:'81.0cm',},
    {value:'81.1cm',label:'81.1cm',},
    {value:'81.2cm',label:'81.2cm',},
    {value:'81.3cm',label:'81.3cm',},
    {value:'81.4cm',label:'81.4cm',},
    {value:'81.5cm',label:'81.5cm',},
    {value:'81.6cm',label:'81.6cm',},
    {value:'81.7cm',label:'81.7cm',},
    {value:'81.8cm',label:'81.8cm',},
    {value:'81.9cm',label:'81.9cm',},
    {value:'82.0cm',label:'82.0cm',},
    {value:'82.1cm',label:'82.1cm',},
    {value:'82.2cm',label:'82.2cm',},
    {value:'82.3cm',label:'82.3cm',},
    {value:'82.4cm',label:'82.4cm',},
    {value:'82.5cm',label:'82.5cm',},
    {value:'82.6cm',label:'82.6cm',},
    {value:'82.7cm',label:'82.7cm',},
    {value:'82.8cm',label:'82.8cm',},
    {value:'82.9cm',label:'82.9cm',},
    {value:'83.0cm',label:'83.0cm',},
    {value:'83.1cm',label:'83.1cm',},
    {value:'83.2cm',label:'83.2cm',},
    {value:'83.3cm',label:'83.3cm',},
    {value:'83.4cm',label:'83.4cm',},
    {value:'83.5cm',label:'83.5cm',},
    {value:'83.6cm',label:'83.6cm',},
    {value:'83.7cm',label:'83.7cm',},
    {value:'83.8cm',label:'83.8cm',},
    {value:'83.9cm',label:'83.9cm',},
    {value:'84.0cm',label:'84.0cm',},
    {value:'84.1cm',label:'84.1cm',},
    {value:'84.2cm',label:'84.2cm',},
    {value:'84.3cm',label:'84.3cm',},
    {value:'84.4cm',label:'84.4cm',},
    {value:'84.5cm',label:'84.5cm',},
    {value:'84.6cm',label:'84.6cm',},
    {value:'84.7cm',label:'84.7cm',},
    {value:'84.8cm',label:'84.8cm',},
    {value:'84.9cm',label:'84.9cm',},
    {value:'85.0cm',label:'85.0cm',},
    {value:'85.1cm',label:'85.1cm',},
    {value:'85.2cm',label:'85.2cm',},
    {value:'85.3cm',label:'85.3cm',},
    {value:'85.4cm',label:'85.4cm',},
    {value:'85.5cm',label:'85.5cm',},
    {value:'85.6cm',label:'85.6cm',},
    {value:'85.7cm',label:'85.7cm',},
    {value:'85.8cm',label:'85.8cm',},
    {value:'85.9cm',label:'85.9cm',},
    {value:'86.0cm',label:'86.0cm',},
    {value:'86.1cm',label:'86.1cm',},
    {value:'86.2cm',label:'86.2cm',},
    {value:'86.3cm',label:'86.3cm',},
    {value:'86.4cm',label:'86.4cm',},
    {value:'86.5cm',label:'86.5cm',},
    {value:'86.6cm',label:'86.6cm',},
    {value:'86.7cm',label:'86.7cm',},
    {value:'86.8cm',label:'86.8cm',},
    {value:'86.9cm',label:'86.9cm',},
    {value:'87.0cm',label:'87.0cm',},
    {value:'87.1cm',label:'87.1cm',},
    {value:'87.2cm',label:'87.2cm',},
    {value:'87.3cm',label:'87.3cm',},
    {value:'87.4cm',label:'87.4cm',},
    {value:'87.5cm',label:'87.5cm',},
    {value:'87.6cm',label:'87.6cm',},
    {value:'87.7cm',label:'87.7cm',},
    {value:'87.8cm',label:'87.8cm',},
    {value:'87.9cm',label:'87.9cm',},
    {value:'88.0cm',label:'88.0cm',},
    {value:'88.1cm',label:'88.1cm',},
    {value:'88.2cm',label:'88.2cm',},
    {value:'88.3cm',label:'88.3cm',},
    {value:'88.4cm',label:'88.4cm',},
    {value:'88.5cm',label:'88.5cm',},
    {value:'88.6cm',label:'88.6cm',},
    {value:'88.7cm',label:'88.7cm',},
    {value:'88.8cm',label:'88.8cm',},
    {value:'88.9cm',label:'88.9cm',},
    {value:'89.0cm',label:'89.0cm',},
    {value:'89.1cm',label:'89.1cm',},
    {value:'89.2cm',label:'89.2cm',},
    {value:'89.3cm',label:'89.3cm',},
    {value:'89.4cm',label:'89.4cm',},
    {value:'89.5cm',label:'89.5cm',},
    {value:'89.6cm',label:'89.6cm',},
    {value:'89.7cm',label:'89.7cm',},
    {value:'89.8cm',label:'89.8cm',},
    {value:'89.9cm',label:'89.9cm',},
    {value:'90.0cm',label:'90.0cm',},
    {value:'90.1cm',label:'90.1cm',},
    {value:'90.2cm',label:'90.2cm',},
    {value:'90.3cm',label:'90.3cm',},
    {value:'90.4cm',label:'90.4cm',},
    {value:'90.5cm',label:'90.5cm',},
    {value:'90.6cm',label:'90.6cm',},
    {value:'90.7cm',label:'90.7cm',},
    {value:'90.8cm',label:'90.8cm',},
    {value:'90.9cm',label:'90.9cm',},
    {value:'91.0cm',label:'91.0cm',},
    {value:'91.1cm',label:'91.1cm',},
    {value:'91.2cm',label:'91.2cm',},
    {value:'91.3cm',label:'91.3cm',},
    {value:'91.4cm',label:'91.4cm',},
    {value:'91.5cm',label:'91.5cm',},
    {value:'91.6cm',label:'91.6cm',},
    {value:'91.7cm',label:'91.7cm',},
    {value:'91.8cm',label:'91.8cm',},
    {value:'91.9cm',label:'91.9cm',},
    {value:'92.0cm',label:'92.0cm',},
    {value:'92.1cm',label:'92.1cm',},
    {value:'92.2cm',label:'92.2cm',},
    {value:'92.3cm',label:'92.3cm',},
    {value:'92.4cm',label:'92.4cm',},
    {value:'92.5cm',label:'92.5cm',},
    {value:'92.6cm',label:'92.6cm',},
    {value:'92.7cm',label:'92.7cm',},
    {value:'92.8cm',label:'92.8cm',},
    {value:'92.9cm',label:'92.9cm',},
    {value:'93.0cm',label:'93.0cm',},
    {value:'93.1cm',label:'93.1cm',},
    {value:'93.2cm',label:'93.2cm',},
    {value:'93.3cm',label:'93.3cm',},
    {value:'93.4cm',label:'93.4cm',},
    {value:'93.5cm',label:'93.5cm',},
    {value:'93.6cm',label:'93.6cm',},
    {value:'93.7cm',label:'93.7cm',},
    {value:'93.8cm',label:'93.8cm',},
    {value:'93.9cm',label:'93.9cm',},
    {value:'94.0cm',label:'94.0cm',},
    {value:'94.1cm',label:'94.1cm',},
    {value:'94.2cm',label:'94.2cm',},
    {value:'94.3cm',label:'94.3cm',},
    {value:'94.4cm',label:'94.4cm',},
    {value:'94.5cm',label:'94.5cm',},
    {value:'94.6cm',label:'94.6cm',},
    {value:'94.7cm',label:'94.7cm',},
    {value:'94.8cm',label:'94.8cm',},
    {value:'94.9cm',label:'94.9cm',},
    {value:'95.0cm',label:'95.0cm',},
    {value:'95.1cm',label:'95.1cm',},
    {value:'95.2cm',label:'95.2cm',},
    {value:'95.3cm',label:'95.3cm',},
    {value:'95.4cm',label:'95.4cm',},
    {value:'95.5cm',label:'95.5cm',},
    {value:'95.6cm',label:'95.6cm',},
    {value:'95.7cm',label:'95.7cm',},
    {value:'95.8cm',label:'95.8cm',},
    {value:'95.9cm',label:'95.9cm',},
    {value:'96.0cm',label:'96.0cm',},
    {value:'96.1cm',label:'96.1cm',},
    {value:'96.2cm',label:'96.2cm',},
    {value:'96.3cm',label:'96.3cm',},
    {value:'96.4cm',label:'96.4cm',},
    {value:'96.5cm',label:'96.5cm',},
    {value:'96.6cm',label:'96.6cm',},
    {value:'96.7cm',label:'96.7cm',},
    {value:'96.8cm',label:'96.8cm',},
    {value:'96.9cm',label:'96.9cm',},
    {value:'97.0cm',label:'97.0cm',},
    {value:'97.1cm',label:'97.1cm',},
    {value:'97.2cm',label:'97.2cm',},
    {value:'97.3cm',label:'97.3cm',},
    {value:'97.4cm',label:'97.4cm',},
    {value:'97.5cm',label:'97.5cm',},
    {value:'97.6cm',label:'97.6cm',},
    {value:'97.7cm',label:'97.7cm',},
    {value:'97.8cm',label:'97.8cm',},
    {value:'97.9cm',label:'97.9cm',},
    {value:'98.0cm',label:'98.0cm',},
    {value:'98.1cm',label:'98.1cm',},
    {value:'98.2cm',label:'98.2cm',},
    {value:'98.3cm',label:'98.3cm',},
    {value:'98.4cm',label:'98.4cm',},
    {value:'98.5cm',label:'98.5cm',},
    {value:'98.6cm',label:'98.6cm',},
    {value:'98.7cm',label:'98.7cm',},
    {value:'98.8cm',label:'98.8cm',},
    {value:'98.9cm',label:'98.9cm',},
    {value:'99.0cm',label:'99.0cm',},
    {value:'99.1cm',label:'99.1cm',},
    {value:'99.2cm',label:'99.2cm',},
    {value:'99.3cm',label:'99.3cm',},
    {value:'99.4cm',label:'99.4cm',},
    {value:'99.5cm',label:'99.5cm',},
    {value:'99.6cm',label:'99.6cm',},
    {value:'99.7cm',label:'99.7cm',},
    {value:'99.8cm',label:'99.8cm',},
    {value:'99.9cm',label:'99.9cm',},
    {value:'100.0cm',label:'100.0cm',},
    {value:'100.1cm',label:'100.1cm',},
    {value:'100.2cm',label:'100.2cm',},
    {value:'100.3cm',label:'100.3cm',},
    {value:'100.4cm',label:'100.4cm',},
    {value:'100.5cm',label:'100.5cm',},
    {value:'100.6cm',label:'100.6cm',},
    {value:'100.7cm',label:'100.7cm',},
    {value:'100.8cm',label:'100.8cm',},
    {value:'100.9cm',label:'100.9cm',},
    {value:'101.0cm',label:'101.0cm',},
    {value:'101.1cm',label:'101.1cm',},
    {value:'101.2cm',label:'101.2cm',},
    {value:'101.3cm',label:'101.3cm',},
    {value:'101.4cm',label:'101.4cm',},
    {value:'101.5cm',label:'101.5cm',},
    {value:'101.6cm',label:'101.6cm',},
    {value:'101.7cm',label:'101.7cm',},
    {value:'101.8cm',label:'101.8cm',},
    {value:'101.9cm',label:'101.9cm',},
    {value:'102.0cm',label:'102.0cm',},
    {value:'102.1cm',label:'102.1cm',},
    {value:'102.2cm',label:'102.2cm',},
    {value:'102.3cm',label:'102.3cm',},
    {value:'102.4cm',label:'102.4cm',},
    {value:'102.5cm',label:'102.5cm',},
    {value:'102.6cm',label:'102.6cm',},
    {value:'102.7cm',label:'102.7cm',},
    {value:'102.8cm',label:'102.8cm',},
    {value:'102.9cm',label:'102.9cm',},
    {value:'103.0cm',label:'103.0cm',},
    {value:'103.1cm',label:'103.1cm',},
    {value:'103.2cm',label:'103.2cm',},
    {value:'103.3cm',label:'103.3cm',},
    {value:'103.4cm',label:'103.4cm',},
    {value:'103.5cm',label:'103.5cm',},
    {value:'103.6cm',label:'103.6cm',},
    {value:'103.7cm',label:'103.7cm',},
    {value:'103.8cm',label:'103.8cm',},
    {value:'103.9cm',label:'103.9cm',},
    {value:'104.0cm',label:'104.0cm',},
    {value:'104.1cm',label:'104.1cm',},
    {value:'104.2cm',label:'104.2cm',},
    {value:'104.3cm',label:'104.3cm',},
    {value:'104.4cm',label:'104.4cm',},
    {value:'104.5cm',label:'104.5cm',},
    {value:'104.6cm',label:'104.6cm',},
    {value:'104.7cm',label:'104.7cm',},
    {value:'104.8cm',label:'104.8cm',},
    {value:'104.9cm',label:'104.9cm',},
    {value:'105.0cm',label:'105.0cm',},
    {value:'105.1cm',label:'105.1cm',},
    {value:'105.2cm',label:'105.2cm',},
    {value:'105.3cm',label:'105.3cm',},
    {value:'105.4cm',label:'105.4cm',},
    {value:'105.5cm',label:'105.5cm',},
    {value:'105.6cm',label:'105.6cm',},
    {value:'105.7cm',label:'105.7cm',},
    {value:'105.8cm',label:'105.8cm',},
    {value:'105.9cm',label:'105.9cm',},
    {value:'106.0cm',label:'106.0cm',},
    {value:'106.1cm',label:'106.1cm',},
    {value:'106.2cm',label:'106.2cm',},
    {value:'106.3cm',label:'106.3cm',},
    {value:'106.4cm',label:'106.4cm',},
    {value:'106.5cm',label:'106.5cm',},
    {value:'106.6cm',label:'106.6cm',},
    {value:'106.7cm',label:'106.7cm',},
    {value:'106.8cm',label:'106.8cm',},
    {value:'106.9cm',label:'106.9cm',},
    {value:'107.0cm',label:'107.0cm',},
    {value:'107.1cm',label:'107.1cm',},
    {value:'107.2cm',label:'107.2cm',},
    {value:'107.3cm',label:'107.3cm',},
    {value:'107.4cm',label:'107.4cm',},
    {value:'107.5cm',label:'107.5cm',},
    {value:'107.6cm',label:'107.6cm',},
    {value:'107.7cm',label:'107.7cm',},
    {value:'107.8cm',label:'107.8cm',},
    {value:'107.9cm',label:'107.9cm',},
    {value:'108.0cm',label:'108.0cm',},
    {value:'108.1cm',label:'108.1cm',},
    {value:'108.2cm',label:'108.2cm',},
    {value:'108.3cm',label:'108.3cm',},
    {value:'108.4cm',label:'108.4cm',},
    {value:'108.5cm',label:'108.5cm',},
    {value:'108.6cm',label:'108.6cm',},
    {value:'108.7cm',label:'108.7cm',},
    {value:'108.8cm',label:'108.8cm',},
    {value:'108.9cm',label:'108.9cm',},
    {value:'109.0cm',label:'109.0cm',},
    {value:'109.1cm',label:'109.1cm',},
    {value:'109.2cm',label:'109.2cm',},
    {value:'109.3cm',label:'109.3cm',},
    {value:'109.4cm',label:'109.4cm',},
    {value:'109.5cm',label:'109.5cm',},
    {value:'109.6cm',label:'109.6cm',},
    {value:'109.7cm',label:'109.7cm',},
    {value:'109.8cm',label:'109.8cm',},
    {value:'109.9cm',label:'109.9cm',},
    {value:'110.0cm',label:'110.0cm',},
    {value:'110.1cm',label:'110.1cm',},
    {value:'110.2cm',label:'110.2cm',},
    {value:'110.3cm',label:'110.3cm',},
    {value:'110.4cm',label:'110.4cm',},
    {value:'110.5cm',label:'110.5cm',},
    {value:'110.6cm',label:'110.6cm',},
    {value:'110.7cm',label:'110.7cm',},
    {value:'110.8cm',label:'110.8cm',},
    {value:'110.9cm',label:'110.9cm',},
    {value:'111.0cm',label:'111.0cm',},
    {value:'111.1cm',label:'111.1cm',},
    {value:'111.2cm',label:'111.2cm',},
    {value:'111.3cm',label:'111.3cm',},
    {value:'111.4cm',label:'111.4cm',},
    {value:'111.5cm',label:'111.5cm',},
    {value:'111.6cm',label:'111.6cm',},
    {value:'111.7cm',label:'111.7cm',},
    {value:'111.8cm',label:'111.8cm',},
    {value:'111.9cm',label:'111.9cm',},
    {value:'112.0cm',label:'112.0cm',},
    {value:'112.1cm',label:'112.1cm',},
    {value:'112.2cm',label:'112.2cm',},
    {value:'112.3cm',label:'112.3cm',},
    {value:'112.4cm',label:'112.4cm',},
    {value:'112.5cm',label:'112.5cm',},
    {value:'112.6cm',label:'112.6cm',},
    {value:'112.7cm',label:'112.7cm',},
    {value:'112.8cm',label:'112.8cm',},
    {value:'112.9cm',label:'112.9cm',},
    {value:'113.0cm',label:'113.0cm',},
    {value:'113.1cm',label:'113.1cm',},
    {value:'113.2cm',label:'113.2cm',},
    {value:'113.3cm',label:'113.3cm',},
    {value:'113.4cm',label:'113.4cm',},
    {value:'113.5cm',label:'113.5cm',},
    {value:'113.6cm',label:'113.6cm',},
    {value:'113.7cm',label:'113.7cm',},
    {value:'113.8cm',label:'113.8cm',},
    {value:'113.9cm',label:'113.9cm',},
    {value:'114.0cm',label:'114.0cm',},
    {value:'114.1cm',label:'114.1cm',},
    {value:'114.2cm',label:'114.2cm',},
    {value:'114.3cm',label:'114.3cm',},
    {value:'114.4cm',label:'114.4cm',},
    {value:'114.5cm',label:'114.5cm',},
    {value:'114.6cm',label:'114.6cm',},
    {value:'114.7cm',label:'114.7cm',},
    {value:'114.8cm',label:'114.8cm',},
    {value:'114.9cm',label:'114.9cm',},
    {value:'115.0cm',label:'115.0cm',},
    {value:'115.1cm',label:'115.1cm',},
    {value:'115.2cm',label:'115.2cm',},
    {value:'115.3cm',label:'115.3cm',},
    {value:'115.4cm',label:'115.4cm',},
    {value:'115.5cm',label:'115.5cm',},
    {value:'115.6cm',label:'115.6cm',},
    {value:'115.7cm',label:'115.7cm',},
    {value:'115.8cm',label:'115.8cm',},
    {value:'115.9cm',label:'115.9cm',},
    {value:'116.0cm',label:'116.0cm',},
    {value:'116.1cm',label:'116.1cm',},
    {value:'116.2cm',label:'116.2cm',},
    {value:'116.3cm',label:'116.3cm',},
    {value:'116.4cm',label:'116.4cm',},
    {value:'116.5cm',label:'116.5cm',},
    {value:'116.6cm',label:'116.6cm',},
    {value:'116.7cm',label:'116.7cm',},
    {value:'116.8cm',label:'116.8cm',},
    {value:'116.9cm',label:'116.9cm',},
    {value:'117.0cm',label:'117.0cm',},
    {value:'117.1cm',label:'117.1cm',},
    {value:'117.2cm',label:'117.2cm',},
    {value:'117.3cm',label:'117.3cm',},
    {value:'117.4cm',label:'117.4cm',},
    {value:'117.5cm',label:'117.5cm',},
    {value:'117.6cm',label:'117.6cm',},
    {value:'117.7cm',label:'117.7cm',},
    {value:'117.8cm',label:'117.8cm',},
    {value:'117.9cm',label:'117.9cm',},
    {value:'118.0cm',label:'118.0cm',},
    {value:'118.1cm',label:'118.1cm',},
    {value:'118.2cm',label:'118.2cm',},
    {value:'118.3cm',label:'118.3cm',},
    {value:'118.4cm',label:'118.4cm',},
    {value:'118.5cm',label:'118.5cm',},
    {value:'118.6cm',label:'118.6cm',},
    {value:'118.7cm',label:'118.7cm',},
    {value:'118.8cm',label:'118.8cm',},
    {value:'118.9cm',label:'118.9cm',},
    {value:'119.0cm',label:'119.0cm',},
    {value:'119.1cm',label:'119.1cm',},
    {value:'119.2cm',label:'119.2cm',},
    {value:'119.3cm',label:'119.3cm',},
    {value:'119.4cm',label:'119.4cm',},
    {value:'119.5cm',label:'119.5cm',},
    {value:'119.6cm',label:'119.6cm',},
    {value:'119.7cm',label:'119.7cm',},
    {value:'119.8cm',label:'119.8cm',},
    {value:'119.9cm',label:'119.9cm',},
    {value:'120.0cm',label:'120.0cm',},
    {value:'120.1cm',label:'120.1cm',},
    {value:'120.2cm',label:'120.2cm',},
    {value:'120.3cm',label:'120.3cm',},
    {value:'120.4cm',label:'120.4cm',},
    {value:'120.5cm',label:'120.5cm',},
    {value:'120.6cm',label:'120.6cm',},
    {value:'120.7cm',label:'120.7cm',},
  ];

  const diametroCabezas = [
    {value:'32.0cm',label:'32.0cm',},
    {value:'32.1cm',label:'32.1cm',},
    {value:'32.2cm',label:'32.2cm',},
    {value:'32.3cm',label:'32.3cm',},
    {value:'32.4cm',label:'32.4cm',},
    {value:'32.5cm',label:'32.5cm',},
    {value:'32.6cm',label:'32.6cm',},
    {value:'32.7cm',label:'32.7cm',},
    {value:'32.8cm',label:'32.8cm',},
    {value:'32.9cm',label:'32.9cm',},
    {value:'33.0cm',label:'33.0cm',},
    {value:'33.1cm',label:'33.1cm',},
    {value:'33.2cm',label:'33.2cm',},
    {value:'33.3cm',label:'33.3cm',},
    {value:'33.4cm',label:'33.4cm',},
    {value:'33.5cm',label:'33.5cm',},
    {value:'33.6cm',label:'33.6cm',},
    {value:'33.7cm',label:'33.7cm',},
    {value:'33.8cm',label:'33.8cm',},
    {value:'33.9cm',label:'33.9cm',},
    {value:'34.0cm',label:'34.0cm',},
    {value:'34.1cm',label:'34.1cm',},
    {value:'34.2cm',label:'34.2cm',},
    {value:'34.3cm',label:'34.3cm',},
    {value:'34.4cm',label:'34.4cm',},
    {value:'34.5cm',label:'34.5cm',},
    {value:'34.6cm',label:'34.6cm',},
    {value:'34.7cm',label:'34.7cm',},
    {value:'34.8cm',label:'34.8cm',},
    {value:'34.9cm',label:'34.9cm',},
    {value:'35.0cm',label:'35.0cm',},
    {value:'35.1cm',label:'35.1cm',},
    {value:'35.2cm',label:'35.2cm',},
    {value:'35.3cm',label:'35.3cm',},
    {value:'35.4cm',label:'35.4cm',},
    {value:'35.5cm',label:'35.5cm',},
    {value:'35.6cm',label:'35.6cm',},
    {value:'35.7cm',label:'35.7cm',},
    {value:'35.8cm',label:'35.8cm',},
    {value:'35.9cm',label:'35.9cm',},
    {value:'36.0cm',label:'36.0cm',},
    {value:'36.1cm',label:'36.1cm',},
    {value:'36.2cm',label:'36.2cm',},
    {value:'36.3cm',label:'36.3cm',},
    {value:'36.4cm',label:'36.4cm',},
    {value:'36.5cm',label:'36.5cm',},
    {value:'36.6cm',label:'36.6cm',},
    {value:'36.7cm',label:'36.7cm',},
    {value:'36.8cm',label:'36.8cm',},
    {value:'36.9cm',label:'36.9cm',},
    {value:'37.0cm',label:'37.0cm',},
    {value:'37.1cm',label:'37.1cm',},
    {value:'37.2cm',label:'37.2cm',},
    {value:'37.3cm',label:'37.3cm',},
    {value:'37.4cm',label:'37.4cm',},
    {value:'37.5cm',label:'37.5cm',},
    {value:'37.6cm',label:'37.6cm',},
    {value:'37.7cm',label:'37.7cm',},
    {value:'37.8cm',label:'37.8cm',},
    {value:'37.9cm',label:'37.9cm',},
    {value:'38.0cm',label:'38.0cm',},
    {value:'38.1cm',label:'38.1cm',},
    {value:'38.2cm',label:'38.2cm',},
    {value:'38.3cm',label:'38.3cm',},
    {value:'38.4cm',label:'38.4cm',},
    {value:'38.5cm',label:'38.5cm',},
    {value:'38.6cm',label:'38.6cm',},
    {value:'38.7cm',label:'38.7cm',},
    {value:'38.8cm',label:'38.8cm',},
    {value:'38.9cm',label:'38.9cm',},
    {value:'39.0cm',label:'39.0cm',},
    {value:'39.1cm',label:'39.1cm',},
    {value:'39.2cm',label:'39.2cm',},
    {value:'39.3cm',label:'39.3cm',},
    {value:'39.4cm',label:'39.4cm',},
    {value:'39.5cm',label:'39.5cm',},
    {value:'39.6cm',label:'39.6cm',},
    {value:'39.7cm',label:'39.7cm',},
    {value:'39.8cm',label:'39.8cm',},
    {value:'39.9cm',label:'39.9cm',},
    {value:'40.0cm',label:'40.0cm',},
    {value:'40.1cm',label:'40.1cm',},
    {value:'40.2cm',label:'40.2cm',},
    {value:'40.3cm',label:'40.3cm',},
    {value:'40.4cm',label:'40.4cm',},
    {value:'40.5cm',label:'40.5cm',},
    {value:'40.6cm',label:'40.6cm',},
    {value:'40.7cm',label:'40.7cm',},
    {value:'40.8cm',label:'40.8cm',},
    {value:'40.9cm',label:'40.9cm',},
    {value:'41.0cm',label:'41.0cm',},
    {value:'41.1cm',label:'41.1cm',},
    {value:'41.2cm',label:'41.2cm',},
    {value:'41.3cm',label:'41.3cm',},
    {value:'41.4cm',label:'41.4cm',},
    {value:'41.5cm',label:'41.5cm',},
    {value:'41.6cm',label:'41.6cm',},
    {value:'41.7cm',label:'41.7cm',},
    {value:'41.8cm',label:'41.8cm',},
    {value:'41.9cm',label:'41.9cm',},
    {value:'42.0cm',label:'42.0cm',},
    {value:'42.1cm',label:'42.1cm',},
    {value:'42.2cm',label:'42.2cm',},
    {value:'42.3cm',label:'42.3cm',},
    {value:'42.4cm',label:'42.4cm',},
    {value:'42.5cm',label:'42.5cm',},
    {value:'42.6cm',label:'42.6cm',},
    {value:'42.7cm',label:'42.7cm',},
    {value:'42.8cm',label:'42.8cm',},
    {value:'42.9cm',label:'42.9cm',},
    {value:'43.0cm',label:'43.0cm',},
    {value:'43.1cm',label:'43.1cm',},
    {value:'43.2cm',label:'43.2cm',},
    {value:'43.3cm',label:'43.3cm',},
    {value:'43.4cm',label:'43.4cm',},
    {value:'43.5cm',label:'43.5cm',},
    {value:'43.6cm',label:'43.6cm',},
    {value:'43.7cm',label:'43.7cm',},
    {value:'43.8cm',label:'43.8cm',},
    {value:'43.9cm',label:'43.9cm',},
    {value:'44.0cm',label:'44.0cm',},
    {value:'44.1cm',label:'44.1cm',},
    {value:'44.2cm',label:'44.2cm',},
    {value:'44.3cm',label:'44.3cm',},
    {value:'44.4cm',label:'44.4cm',},
    {value:'44.5cm',label:'44.5cm',},
    {value:'44.6cm',label:'44.6cm',},
    {value:'44.7cm',label:'44.7cm',},
    {value:'44.8cm',label:'44.8cm',},
    {value:'44.9cm',label:'44.9cm',},
    {value:'45.0cm',label:'45.0cm',},
    {value:'45.1cm',label:'45.1cm',},
    {value:'45.2cm',label:'45.2cm',},
    {value:'45.3cm',label:'45.3cm',},
    {value:'45.4cm',label:'45.4cm',},
    {value:'45.5cm',label:'45.5cm',},
    {value:'45.6cm',label:'45.6cm',},
    {value:'45.7cm',label:'45.7cm',},
    {value:'45.8cm',label:'45.8cm',},
    {value:'45.9cm',label:'45.9cm',},
    {value:'46.0cm',label:'46.0cm',},
    {value:'46.1cm',label:'46.1cm',},
    {value:'46.2cm',label:'46.2cm',},
    {value:'46.3cm',label:'46.3cm',},
    {value:'46.4cm',label:'46.4cm',},
    {value:'46.5cm',label:'46.5cm',},
    {value:'46.6cm',label:'46.6cm',},
    {value:'46.7cm',label:'46.7cm',},
    {value:'46.8cm',label:'46.8cm',},
    {value:'46.9cm',label:'46.9cm',},
    {value:'47.0cm',label:'47.0cm',},
    {value:'47.1cm',label:'47.1cm',},
    {value:'47.2cm',label:'47.2cm',},
    {value:'47.3cm',label:'47.3cm',},
    {value:'47.4cm',label:'47.4cm',},
    {value:'47.5cm',label:'47.5cm',},
    {value:'47.6cm',label:'47.6cm',},
    {value:'47.7cm',label:'47.7cm',},
    {value:'47.8cm',label:'47.8cm',},
    {value:'47.9cm',label:'47.9cm',},
    {value:'48.0cm',label:'48.0cm',},
    {value:'48.1cm',label:'48.1cm',},
    {value:'48.2cm',label:'48.2cm',},
    {value:'48.3cm',label:'48.3cm',},
    {value:'48.4cm',label:'48.4cm',},
    {value:'48.5cm',label:'48.5cm',},
    {value:'48.6cm',label:'48.6cm',},
    {value:'48.7cm',label:'48.7cm',},
    {value:'48.8cm',label:'48.8cm',},
    {value:'48.9cm',label:'48.9cm',},
    {value:'49.0cm',label:'49.0cm',},
    {value:'49.1cm',label:'49.1cm',},
    {value:'49.2cm',label:'49.2cm',},
    {value:'49.3cm',label:'49.3cm',},
    {value:'49.4cm',label:'49.4cm',},
    {value:'49.5cm',label:'49.5cm',},
    {value:'49.6cm',label:'49.6cm',},
    {value:'49.7cm',label:'49.7cm',},
    {value:'49.8cm',label:'49.8cm',},
    {value:'49.9cm',label:'49.9cm',},
    {value:'50.0cm',label:'50.0cm',},
    {value:'50.1cm',label:'50.1cm',},
    {value:'50.2cm',label:'50.2cm',},
    {value:'50.3cm',label:'50.3cm',},
    {value:'50.4cm',label:'50.4cm',},
    {value:'50.5cm',label:'50.5cm',},
    {value:'50.6cm',label:'50.6cm',},
    {value:'50.7cm',label:'50.7cm',},
    {value:'50.8cm',label:'50.8cm',},
    {value:'50.9cm',label:'50.9cm',},
    {value:'51.0cm',label:'51.0cm',},
    {value:'51.1cm',label:'51.1cm',},
    {value:'51.2cm',label:'51.2cm',},
    {value:'51.3cm',label:'51.3cm',},
    {value:'51.4cm',label:'51.4cm',},
    {value:'51.5cm',label:'51.5cm',},
    {value:'51.6cm',label:'51.6cm',},
    {value:'51.7cm',label:'51.7cm',},
    {value:'51.8cm',label:'51.8cm',},
    {value:'51.9cm',label:'51.9cm',},
    {value:'52.0cm',label:'52.0cm',},
    {value:'52.1cm',label:'52.1cm',},
    {value:'52.2cm',label:'52.2cm',},
    {value:'52.3cm',label:'52.3cm',},
    {value:'52.4cm',label:'52.4cm',},
    {value:'52.5cm',label:'52.5cm',},
    {value:'52.6cm',label:'52.6cm',},
    {value:'52.7cm',label:'52.7cm',},
    {value:'52.8cm',label:'52.8cm',},
    {value:'52.9cm',label:'52.9cm',},
    {value:'53.0cm',label:'53.0cm',},
    {value:'53.1cm',label:'53.1cm',},
    {value:'53.2cm',label:'53.2cm',},
    {value:'53.3cm',label:'53.3cm',},
    {value:'53.4cm',label:'53.4cm',},
    {value:'53.5cm',label:'53.5cm',},
    {value:'53.6cm',label:'53.6cm',},
    {value:'53.7cm',label:'53.7cm',},
    {value:'53.8cm',label:'53.8cm',},
    {value:'53.9cm',label:'53.9cm',},
    {value:'54.0cm',label:'54.0cm',},
    {value:'54.1cm',label:'54.1cm',},
    {value:'54.2cm',label:'54.2cm',},
    {value:'54.3cm',label:'54.3cm',},
    {value:'54.4cm',label:'54.4cm',},
    {value:'54.5cm',label:'54.5cm',},
    {value:'54.6cm',label:'54.6cm',},
    {value:'54.7cm',label:'54.7cm',},
    {value:'54.8cm',label:'54.8cm',},
    {value:'54.9cm',label:'54.9cm',},
    {value:'55.0cm',label:'55.0cm',},
  ];


  const updateado= async function()
  {
      let datos = {
        name:hijos,
        peso:peso,
        altura:altura,
        diametroCabeza: diametroCabeza,
      } 
      let updateaHijo = await updateHijo(datos)
      let getVacunas = await getvacunasByMail()
      let getHijos = await getHijosByName()
      window.location.reload(false);
    
  }  

  const ARRAYHIJOS = JSON.parse(localStorage.getItem('arrayHijos'))
  console.log('arrayhijos',ARRAYHIJOS)
  var nombresPA = []
  console.log('el lenght', ARRAYHIJOS.length)


  
return (
      <div className="AgregarNiño">
        <NavbarLog/>
          <CssBaseline />
          <Container transparent maxWidth="false">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <center>
              <text className='h1'>Modificar Niño</text>
              <br />
              <br />
              <br />
          

  
        <Container sx={{ py: 2 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {ARRAYHIJOS.map((card) => (
              <Grid item key={card} xs={12} sm={4} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <center><Icon icon="mdi:account-circle" weidth='50' height='50' />

                      <Typography gutterBottom variant="h4" component="h2" color="inherit">
                      {card.name}
                    </Typography></center>
                    <br></br>
                    <Typography variant='h6'>
                      Edad: {card.edad}
                    </Typography>
                    <Typography variant='h6'>
                      Altura: {card.altura}
                    </Typography>
                    <Typography variant='h6'>
                      Peso: {card.peso}
                    </Typography>
                    <Typography variant='h6'>
                      Diametro de la Cabeza: {card.diametroCabeza}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
              <br />
              <br />

              <TextField
                  id="hijo"
                  select
                  label="Seleccionar Hijo"
                  fullWidth
                  type="Seleccionar Hijo"
                  name="Seleccionar Hijo"
                  value={hijos}
                  onChange={handleChangeHijos}
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "hijo",
                    onChange: (event) => handleChangeHijos(event),
                  }}
                  >
                  {ARRAYHIJOS.map((option) => (
                  <MenuItem key={option.name} value={option.name}>
                  {option.name}
                  </MenuItem>
                  ))}
                </TextField>
                <br/>
                <br/>
                <TextField
                  id="altura"
                  select
                  label="Altura"
                  fullWidth
                  type="altura"
                  name="altura"
                  value={altura}
                  onChange={handleChangeAltura}
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "altura",
                    onChange: (event) => handleChangeAltura(event),
                  }}
                  >
                  {alturas.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                  {option.label}
                  </MenuItem>
                  ))}
                </TextField>
                <br/>
                <br/>
                <TextField
                  id="peso"
                  select
                  label="Peso"
                  fullWidth
                  type="peso"
                  name="peso"
                  value={peso}
                  onChange={handleChangePeso}
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "peso",
                    onChange: (event) => handleChangePeso(event),
                  }}
                  >
                  {pesos.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                  {option.label}
                  </MenuItem>
                  ))}
                </TextField> 
                <br/>
                <br/>
                <TextField
                  id="diametroCabeza"
                  select
                  label="Diametro de Cabeza"
                  fullWidth
                  type="diametroCabeza"
                  name="diametroCabeza"
                  value={diametroCabeza}
                  onChange={handleChangediametroCabeza}
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "diametroCabeza",
                    onChange: (event) => handleChangediametroCabeza(event),
                  }}
                  >
                  {diametroCabezas.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                  {option.label}
                  </MenuItem>
                  ))}
                </TextField>
                <br/>
                <br/>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => {updateado()}}
                >
                  Modificar Hijo
                </Button>   


            </center>
            {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
              <TextField
                  id="alturaDDropdown"
                  disabled
                  fullWidth
                  type="genero"
                  name="genero"
                  value={hijosDropdown}
                  onChange={handleChangeAltura}
                  >
                  {ARRAYHIJOS.map((option) => (  
                  <MenuItem key={option.altura} value={option.altura}>
                  {option.altura}
                  {option.peso}
                  </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  disabled
                  margin="normal"
                  fullWidth
                  id='Peso'
                  label='peso'
                  name='Peso'
                  autoComplete='Peso'
                  autoFocus />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  margin="normal"
                  disabled
                  fullWidth
                  id='Altura'
                  label='altura'
                  name='Altura'
                  autoComplete='Altura'
                  autoFocus />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  margin="normal"
                  disabled
                  fullWidth
                  id='diametroCabeza de Cabeza'
                  label='ja'
                  name='diametroCabeza de Cabeza'
                  autoComplete='diametroCabeza de Cabeza'
                  autoFocus />
              </Grid>
            </Grid> */}
          




        
          </Container>
          <br />
          <br />
      </div>
  
  
    );
  }
  
  
