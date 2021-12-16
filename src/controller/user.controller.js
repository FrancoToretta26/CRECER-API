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
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            
        });
        
        let rdo = response.status;
        let data = await response.json();
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

export const sendMail= async function(user)
{
    //url webservices
    let url = urlWebServices.sendMail;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('destinatario', user.email);

    localStorage.setItem('destinatario', user.email)
    try
    {
        let response = await fetch(url,{
            method: 'PUT', 
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
                localStorage.setItem("codigo",data.codigo);     
                return ({rdo:0,mensaje:"Ok"});//correcto
            }
            default:{
                console.log(localStorage.setItem("codigo",data.codigo));   
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
                    localStorage.setItem("x",data.loginUser.token);
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

export const updateUser= async function(update)
{
    //url webservices
    let url = urlWebServices.updateUser;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('name',localStorage.getItem("nombreSave"));
    formData.append('email', update.email);
    formData.append('password', update.password);
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