import { myAxios } from "./axios";

export async function login(username, password) {
    try {
        const response = await myAxios.post('/api/login', {
            username,
            password
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
}