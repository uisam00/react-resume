import axios, { AxiosInstance } from 'axios';

const createAxiosInstance = (baseUrl?: string): AxiosInstance => {
    if (baseUrl)
        return axios.create({
            baseURL: `${baseUrl}/`,
        });

    return axios.create();
};

export default createAxiosInstance;
