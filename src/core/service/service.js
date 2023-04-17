import axios from 'axios';
import config from '../config/config'

let serviceConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
};
let uploadConfig = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
};

const baseAPI = axios.create({ baseURL: config.BaseAPI });

export const get = (url) => {
    return baseAPI.get(url, serviceConfig)
};

export const postUpload = (url, data) => {
    return baseAPI.post(url, data, uploadConfig)
};

export const post = (url, data) => {
    return baseAPI.post(url, data, serviceConfig)
};

export const deleteApi = (url) => {
    return baseAPI.delete(url, serviceConfig)
};
