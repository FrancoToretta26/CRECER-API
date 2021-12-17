import { parse } from 'date-fns';
import urlWebServices from '../controller/webServices.js';

export const addVacuna= async function(addVacuna)
{
    //url webservices
    let url = urlWebServices.addVacuna;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('nombreHijo', addVacuna.hijos);
    formData.append('fechaVacunacion', addVacuna.fechaVacunacion);
    formData.append('vacuna', addVacuna.vacuna);
    formData.append('lugar', addVacuna.lugar);
    formData.append('dosis', addVacuna.dosis);
    formData.append('emailUsuario',localStorage.getItem("emailSave"))
    
    //console.log("url",url);
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
               // 'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            
        });
        
        let rdo = response.status;
        let data = await response.json();
        console.log('que es esto', rdo)
        switch(rdo)
        {
            case 200:   
            { 
                return ({rdo:0,mensaje:"Ok"});//correcto
            }
            case 201:   
            { 
                return ({rdo:0,mensaje:"Ok"});//correcto
            }
            default:{
                return(false)}
    }
}
    catch(error)
    {
        console.log("error",error);
    };
}

export const getvacunasByMail= async function(hijo)
{
     //url webservices
     let url = urlWebServices.getvacunasByMail;
     const formData = new URLSearchParams();
     formData.append('emailUsuario',localStorage.getItem("emailSave"))
     //armo json con datos
     try
     {
         let response = await fetch(url,{
             method: 'PUT', // or 'PUT'
             mode: "cors",
             headers:{
                 'Accept':'application/x-www-form-urlencoded',
                // 'x-access-token': WebToken.webToken,
                 'Origin':'http://localhost:3000',
                 'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
             
         });
         
         let rdo = response.status;
         let data = await response.json();
             switch(rdo)
                 {
                     case 200:   
                     {
                         let vacuna = data.Vacunas.docs;
                         localStorage.setItem('arrayVacuna', JSON.stringify(vacuna))
                         var vacunas = [];
                         var hijos = [];
 
                         vacuna.forEach(function (task) {
                          
                             vacunas.push(task.vacuna);
                             hijos.push(task.name);
                              
                         });

                      
                             
        
 
                         return ({rdo:0,mensaje:"Ok"});//correcto
                     }
                 }
     }


     catch(error)
     {
     console.log("error",error);
     };
 } 



export const updateVacuna= async function(updateVacuna)
{
   //url webservices
   let url = urlWebServices.updateVacuna;
   //armo json con datos
   const formData = new URLSearchParams();
   formData.append('name',updateVacuna.name);
   formData.append('vacuna', updateVacuna.vacunas);
   try
   {
       let response = await fetch(url,{
           method: 'PUT', // or 'PUT'
           mode: "cors",
           headers:{
               'Accept':'application/x-www-form-urlencoded',
              // 'x-access-token': WebToken.webToken,
               'Origin':'http://localhost:3000',
               'Content-Type': 'application/x-www-form-urlencoded'},
           body: formData,
           
       });
       
       let rdo = response.status;
       let data = await response.json();
           switch(rdo)
           {
               case 201:
               {
                   //guardo token
                   //guardo usuario logueado
                   let user = data.updateUser.user;
                   localStorage.setItem("name",user.name);
                   localStorage.setItem("email",user.email);
                   localStorage.setItem("password", user.password);
                   
                   return ({rdo:0,mensaje:"Ok"});//correcto
               }
               case 202:
               {
                   //error mail
                   return ({rdo:1,mensaje:"El mail ingresado no existe en nuestra base."});
               }
               case 203:
               {
                   //error password
                   return ({rdo:1,mensaje:"La contraseña no es correcta."});
               }
               default:
               {
                   //otro error
                   return ({rdo:1,mensaje:"Ha ocurrido un error"});                
               }
           }
   }
   catch(error)
   {
       console.log("error",error);
   };
}

