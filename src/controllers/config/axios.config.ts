import axios, { AxiosInstance } from 'axios';

class AxiosConfig {
    private readonly axios!: AxiosInstance;

    constructor() {
        this.axios = axios.create({
            baseURL: 'http://localhost:3333',
            timeout: 30_000,
        });
    }

    result() {
        return this.axios;
    }
}

export default new AxiosConfig().result();
