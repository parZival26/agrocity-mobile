import axios, { AxiosError } from "axios";


const axiosInstance = axios.create({
    baseURL: 'http://tuquio.com/agrocity/api',
    headers: {
        "Content-Type": "application/json",
    },
})





export default axiosInstance;