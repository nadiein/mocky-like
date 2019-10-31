import axios from 'axios';

export const _axios = axios.create({
    baseURL: 'http://localhost:9990',
    withCredentials: true,
    crossDomain: true,
    authorization: {
        name: 'admin',
        password: '1234'
    }
});