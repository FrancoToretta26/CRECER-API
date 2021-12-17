import { parse } from 'date-fns';
import urlWebServices from '../controller/webServices.js';

export const updateHijo= async function(update)
{
    //url webservices
    let url = urlWebServices.updateHijo;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('name', update.name)
    formData.append('altura', update.altura);
    formData.append('peso', update.peso);
    formData.append('diametroCabeza', update.diametroCabeza)

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
            }
    }
    catch(error)
    {
        console.log("error",error);
    };
}

export const getHijosByMail= async function(hijo)
{
     //url webservices
     let url = urlWebServices.getHijosByMail;
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
                         let hijo = data.Hijos.docs;
                         localStorage.setItem('arrayHijos', JSON.stringify(hijo))
                         localStorage.setItem('pesoVisita',JSON.stringify(hijo.peso))
                         var edades = [];
                         var hijos = [];
 
                         hijo.forEach(function (task) {
                          
                             edades.push(task.edad);
                             hijos.push(task.name);
                              
                         });

                         localStorage.setItem('nombresHijos', hijos)
                         localStorage.setItem('edadesHijos', hijos)

                         return ({rdo:0,mensaje:"Ok"});//correcto
                     }
                 }
     }


     catch(error)
     {
     console.log("error",error);
     };
 }

export const agregarHijo= async function(agregarHijo)
{
    //url webservices
    let url = urlWebServices.agregarHijo;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('name', agregarHijo.name);
    formData.append('genero', agregarHijo.genero);
    formData.append('altura', agregarHijo.altura);
    formData.append('peso', agregarHijo.peso);
    formData.append('dni',agregarHijo.dni)
    formData.append('edad', agregarHijo.edad)
    formData.append('diametroCabeza', agregarHijo.diametroCabeza);
    formData.append('alergias', agregarHijo.alergias);
    formData.append('enfermedades', agregarHijo.enfermedades);
    formData.append('grupoSanguineo', agregarHijo.grupoSanguineo);
    formData.append('emailUsuario',localStorage.getItem("emailSave"))

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
            switch(rdo)
            {
                case 201:
                {
                    //guardo token
                    //guardo usuario logueado
                    let user = data.Hijos.name;
                    localStorage.setItem("nameHijo",user);
                    
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