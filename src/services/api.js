import axios from "axios"


const apiClient = axios.create(
    {
        baseURL:'http://localhost:3601',
        timeout: 2000,
    }
)

export const registerUser = async (user) => {
    try {
        return await apiClient.post('/v1/auth/register', user)
    } catch (err) {
        return{
            error: true,
            err
        }
    }
}

export const loginRequest = async (user) => {
    try {
        return await apiClient.post('/v1/auth/login', user)
    } catch (err) {
        return{
            error: true,
            err
        }
    }
}