import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.101.4:3001"
})

export default api