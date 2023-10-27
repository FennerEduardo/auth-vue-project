import axios from 'axios';
import { UserData } from '@/models/auth'

const API_URL = 'http://localhost:3000/auth';

const apiService = {
    async login(data: UserData): Promise<any> {
        try {
            const response = await axios.post(`${API_URL}/login`, data);
            return response;
        } catch (error) {
            throw new Error(error);
        }
    },
    async register(data: UserData): Promise<any> {
        try {
            const response = await axios.post(`${API_URL}/register`, data);
            return response;
        } catch (error) {
            console.log(error);
            return error;
            throw new Error(error);
        }
    },
    async logout(): Promise<any> {
        try {
            const response = await axios.post(`${API_URL}/logout`);
            return response;
        } catch (error) {
            throw new Error(error);
        }
    },
};

export default apiService;
