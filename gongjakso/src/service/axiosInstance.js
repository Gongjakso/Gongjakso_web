import axios from 'axios';

const accessToken = localStorage.getItem('accessToken');

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
    },
});

axiosInstance.interceptors.request.use(config => {
    accessToken && (config.headers.Authorization = `Bearer ${accessToken}`);
    return config;
});

const axiosInstanceV2 = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_V2,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
    },
});

axiosInstanceV2.interceptors.request.use(config => {
    accessToken && (config.headers.Authorization = `Bearer ${accessToken}`);
    return config;
});

export default axiosInstance;
