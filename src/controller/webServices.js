import { vacunaExistente } from "./miApp.controller";

const urlApi = "http://localhost:4000/";
//const urlApi = "https://api-viernes.herokuapp.com/";
console.log("url",urlApi);

const urlWebServices = {
    agregarHijo: urlApi + "api/hijos/agregarHijo",
    registro: urlApi + "api/users/registration",
    login:urlApi +"api/users/login",
    uploadFileImg: urlApi + "utils/uploadImg",
    guardarImgUser: urlApi + "api/users/guardarImgUser",
    getImgUser: urlApi + "api/users/imgUserByMail",
    uploadFileImg: urlApi + "api/users/uploadImg",
    updateUser: urlApi + "api/users/updateUser",
    updateHijo: urlApi + "api/hijos/updateHijo",
    nombresHijos: urlApi + "api/hijos/nombreHijo",
    getHijosByName: urlApi + "api/hijos/HijoByName",
    getUsers: urlApi + "api/users/getUsers",
    getPreguntaSeguridad: urlApi + "api/users/getPreguntaSeguridad",
    addVisita: urlApi + "api/visitas/registration",
    addVacuna: urlApi + "api/vacunas/registration",
    getvacunasByMail: urlApi + 'api/vacunas/VacunaByMail',
    vacunaExistente: urlApi + 'api/vacunas/vacunaExistente'

}

export default urlWebServices;