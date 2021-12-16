
const urlApi = "http://localhost:4000/";
//const urlApi = "https://api-viernes.herokuapp.com/";
console.log("url",urlApi);

const urlWebServices = {
    agregarHijo: urlApi + "api/hijos/agregarHijo",
    registro: urlApi + "api/users/registration",
    login:urlApi +"api/users/login",
    updateUser: urlApi + "api/users/updateUser",
    updateHijo: urlApi + "api/hijos/updateHijo",
    getHijosByName: urlApi + "api/hijos/HijoByName",
    getUsers: urlApi + "api/users/getUsers",
    addVisita: urlApi + "api/visitas/registration",
    addVacuna: urlApi + "api/vacunas/registration",
    sendMail: urlApi + 'api/users/sendMail',
    getvacunasByMail: urlApi + 'api/vacunas/VacunaByMail',


}

export default urlWebServices;