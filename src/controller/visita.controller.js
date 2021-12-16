import { parse } from 'date-fns';
import urlWebServices from './webServices.js';




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
    }
    catch(error)
    {
        console.log("error",error);
    };
}






