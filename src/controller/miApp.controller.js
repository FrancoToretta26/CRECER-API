import { parse } from 'date-fns';
import urlWebServices from '../controller/webServices.js';



export const registro= async function(registro)
{
    //url webservices
    let url = urlWebServices.registro;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('name', registro.name);
    formData.append('email', registro.email);
    formData.append('password', registro.password);
    formData.append('dni', registro.dni);
    formData.append('numeroCelular', registro.numeroCelular);
    formData.append('preguntaSeguridad', registro.preguntaSeguridad);
    formData.append('respuestaSeguridad', registro.respuestaSeguridad);

    //console.log("dato",formData);
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
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
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

    //console.log("dato",formData);
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
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
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

export const addVisita= async function(addVisita)
{
    //url webservices
    let url = urlWebServices.addVisita;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('nombreHijo', addVisita.hijos);
    formData.append('horarioVisita', addVisita.time);
    formData.append('fechaVisita', addVisita.date);
    formData.append('Pediatra', addVisita.title);
    formData.append('Observaciones', addVisita.description);
    formData.append('diametroCabeza', addVisita.diametro);
    formData.append('altura', addVisita.altura);
    formData.append('peso', addVisita.peso);
    formData.append('medicamento', addVisita.medicamento);
    formData.append('dosis', addVisita.dosis);
    formData.append('periodo', addVisita.periodo);
    formData.append('estudios', addVisita.estudios);
    formData.append('resultados', addVisita.resultados);
    formData.append('emailUsuario',localStorage.getItem("emailSave"))
    
    console.log("datoss formdata",formData);
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
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
    }
    catch(error)
    {
        console.log("error",error);
    };
}

export const addVacuna= async function(addVacuna)
{
    //url webservices
    let url = urlWebServices.addVacuna;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('nombreHijo', addVacuna.hijos);
    formData.append('fechaVacunacion', addVacuna.fechaVacunacion);
    formData.append('vacuna', addVacuna.vacuna);
    formData.append('vacunaAlternativa', addVacuna.otro);
    formData.append('lugar', addVacuna.lugar);
    formData.append('dosis', addVacuna.dosis);
    formData.append('emailUsuario',localStorage.getItem("emailSave"))
    
    console.log("datoss formdata",formData);
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
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
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
    }
}
    catch(error)
    {
        console.log("error",error);
    };
}

export const getUsers = async function(user)
{
    //url webservices
    let url = urlWebServices.getUsers;
    //armo json con datos
    //console.log("dato",formData);
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
            
        });
        
        let rdo = response.status;
        let data = await response.json();
        console.log("dataaaaaa",data);
            switch(rdo)
                {
                    case 200:   
                    {
                        let user = data.data.docs;
                        localStorage.setItem('usuarios',JSON.stringify(user))
                    }  

                        return ({rdo:0,mensaje:"Ok"});//correcto
                    }
                

    }
    catch(error)
    {
    console.log("error",error);
    };
}

export const getPreguntaSeguridad= async function(user)
{
    //url webservices
    let url = urlWebServices.getPreguntaSeguridad;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('dni', user.dni);

    console.log("dato",formData);
    //console.log("url",url);
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
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);

        switch(rdo)
        {
            case 201:
            {
                let user = data.Users.docs;
                let pregunta = JSON.stringify(user)
                localStorage.setItem("preguntaARRAY", pregunta);
                console.log(pregunta)
                return ({rdo:0,mensaje:"Ok"});//correcto
            }
            case 204:
                let user = data.Users.docs;
                let pregunta = JSON.stringify(user)
                localStorage.setItem("preguntaARRAY", pregunta);
                console.log(pregunta)
                return ({rdo:0,mensaje:"Ok"});//correcto

        }
    }

catch(error)
{
    console.log("error",error);
};
}

export const sendMail= async function(user)
{
    //url webservices
    let url = urlWebServices.sendMail;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('destinatario', user.email);

    console.log("dato",formData);
    //console.log("url",url);
    try
    {
        let response = await fetch(url,{
            method: 'POST', 
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
               // 'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            
        });
        
        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
        switch(rdo)
        {
            case 201:
            {
                //guardo token
                localStorage.setItem("codigo",data.codigo);     
                return ({rdo:0,mensaje:"Ok"});//correcto
            }
        }

    }

catch(error)
{
    console.log("error",error);
};
}
    



export const login= async function(login)
{
    //url webservices
    let url = urlWebServices.login;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('email', login.email);
    formData.append('password', login.password);
    //console.log("dato",formData);
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
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo)
            {
                case 201:
                {
                    //guardo token
                    localStorage.setItem("token",data.loginUser.token);
                    //guardo usuario logueado
                    let user = data.loginUser.user;
                    localStorage.setItem("nombreSave",user.name);
                    localStorage.setItem("emailSave",user.email);
                    
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

export const vacunaExistente= async function(vacuna)
{
    //url webservices
    let url = urlWebServices.vacunaExistente;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('nombreHijo', vacuna.hijos);
    formData.append('vacuna', vacuna.vacuna);
    formData.append('dosis', vacuna.dosis);
    formData.append('emailUsuario',localStorage.getItem("emailSave"))


    //console.log("dato",formData);
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
        console.log("responseVacuna",response);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo)
            {
                case 201:
                {
                    
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

export const getHijosByName= async function(hijo)
{
     //url webservices
     let url = urlWebServices.getHijosByName;
     const formData = new URLSearchParams();
     formData.append('emailUsuario',localStorage.getItem("emailSave"))
     //armo json con datos
     //console.log("dato",formData);
     //console.log("url",url);
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
         console.log("dataaaaaa",data);
             switch(rdo)
                 {
                     case 200:   
                     {
                         let hijo = data.Hijos.docs;
                         console.log(localStorage.setItem('arrayHijos', JSON.stringify(hijo)))
                         console.log('peso',localStorage.setItem('pesoVisita',JSON.stringify(hijo.peso)))
                         var edades = [];
                         var hijos = [];
 
                         hijo.forEach(function (task) {
                          
                             edades.push(task.edad);
                             hijos.push(task.name);
                              
                         });

                         console.log('edades',edades)
                         console.log('hijos',hijos)
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

 export const getvacunasByMail= async function(hijo)
 {
      //url webservices
      let url = urlWebServices.getvacunasByMail;
      const formData = new URLSearchParams();
      formData.append('emailUsuario',localStorage.getItem("emailSave"))
      //armo json con datos
      //console.log("dato",formData);
      //console.log("url",url);
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
          console.log("dataVacuna",data);
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

  export const getvacunasHijo= async function(hijo)
  {
       //url webservices
       let url = urlWebServices.getvacunasHijo;
       const formData = new URLSearchParams();
       formData.append('emailUsuario',localStorage.getItem("emailSave"))
       formData.append('nombreHijo', addVacuna.hijos);
       formData.append('vacuna', addVacuna.vacuna);
       //armo json con datos
       //console.log("dato",formData);
       //console.log("url",url);
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
           console.log("dataVacuna",data);
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

export const updateUser= async function(update)
{
    //url webservices
    let url = urlWebServices.updateUser;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('name',localStorage.getItem("nombreSave"));
    formData.append('email', update.email);
    formData.append('password', update.password);
    console.log("dato",formData);
    console.log("url",url);
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
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
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
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo)
            {
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
    console.log("dato",formData);
    console.log("url",url);
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
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
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

export const guardarImgUser = async function(message)
{
    //url webservices
    let url = urlWebServices.guardarImgUser;
    //console.log("url",url);
    //console.log("token",WebToken.webToken);
    const formData = new URLSearchParams();
    formData.append('email', message.email);
    formData.append('nombreImagen',message.imagen);
    
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body:formData
        });
        if (response.status===201)
        {
            return true;
        }
        else
        {
           return false; 
        }
    }
    catch(error)
    {
        console.log("error",error);
        return false;
    };
}

export const uploadFileImg= async function(files,nombres)
{
     //url webservices
     let url = urlWebServices.uploadFileImg;
  
    console.log('files', files)
    console.log('nombres',nombres)
    const formData = new FormData();
    //agrego archivos para subir
    for (let i = 0; i < files.length; i++)
    {
        formData.append('files', files[i], nombres[i])
    }
   
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/form-data',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                //'Content-Type': 'application/form-data'
            },
            body:formData
        });
    
        let archivos = await response.json()
        console.log('respuestaUpload', archivos);
        return archivos;
    } catch (err) {
        alert('Error uploading the files')
        console.log('Error uploading the files', err)
    }
}
export const getImagenesByUser = async function()
{
    //url webservices
    let url = urlWebServices.getImgUser;
    //console.log("url",url);
    //console.log("token",WebToken.webToken);
    const formData = new URLSearchParams();
    formData.append('email', localStorage.getItem('email'));
    
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body:formData
        });
        if (response.status===200)
        {
            let data = await response.json();
            console.log("imagenesUser",data);
            let listaImg = data.data.docs;
            return listaImg;
        }
        else
        {
            let vacio=[];
            console.log("No hay imagenes")
            return (vacio);
            
        }
    }
    catch(error)
    {
        console.log("error",error);
    };
}