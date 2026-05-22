import axios from 'axios';
import {BASE_URL} from './apiPaths'


const axiosInstance = axios.create({
    baseURL = BASE_URL,
    timeout: 10000,                           // fails if no response in 10 seconds
})