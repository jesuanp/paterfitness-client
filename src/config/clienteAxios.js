import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: process.env.EXPO_PUBLIC_BASE_URL
});

export default clienteAxios;
