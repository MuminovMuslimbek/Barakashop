import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://asadmaxmud.azamovdev.uz/api/v1/'
});

export default axiosInstance;