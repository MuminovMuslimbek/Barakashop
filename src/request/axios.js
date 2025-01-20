import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://barakashop.azamovdev.uz/api/v1/'
});

export default axiosInstance;