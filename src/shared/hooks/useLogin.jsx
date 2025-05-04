import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginRequest } from '../../services/api'
import toast from 'react-hot-toast'

export const useLogin = () => {

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const login = async(userInformation, password)=>{
        setIsLoading(true)
        const user={
            userInformation,
            password
        }
        const response = await loginRequest(user)
        setIsLoading(false)

        if(response.error){
            
            if(response?.err?.response?.data?.errors){
                let arrayErrors = response?.err?.response?.data?.errors
                for (const error of arrayErrors) {
                    return toast.error(error.msg)
                }
            }
            return toast.error(
                response?.err?.response?.data?.msg ||
                response?.err?.data?.msg ||
                'Error general al intentar registrar al usuario. Intenta de nuevo'
            )
        }
        const {loggedUser} = response.data

        localStorage.setItem('user', JSON.stringify(loggedUser))
        toast.success('Welcome back')
        navigate('/')
    }
    return {
        login,
        isLoading
    }
}
