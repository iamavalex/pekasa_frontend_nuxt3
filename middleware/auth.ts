import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/auth/';

export const loginUser = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}login/`, {
            email,
            password
        });
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};

export const registerUser = async (email: string, password: string, password2: string) => {
    try {
        const response = await axios.post(`${API_URL}register/`, {
            email,
            password,
            password2
        });
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};
