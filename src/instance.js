import axios, { Axios } from "axios";

const tmbdAxiosInstance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
})

export default tmbdAxiosInstance;

