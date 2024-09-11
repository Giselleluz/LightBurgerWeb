import axios from 'axios';


//onde esta meu back end
const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export default api