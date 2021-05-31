import axios from 'axios';


const api = axios.create({
    //endereço URL que está rodando a API
    baseURL: 'http://localhost:3333/'
});


export default api;