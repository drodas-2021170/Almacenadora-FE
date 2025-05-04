import React, { useState } from 'react'
import { registerUser } from '../../services/api'
import toast from 'react-hot-toast'


export const useRegister = () => {
    const [isloading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const register = async(name,surname,email,username,password,phone)=>{
        setIsLoading(true)
        const user = {
            name,
            surname,
            email,
            username,
            password,
            phone
        }

        const response = await registerUser(user)
        setIsLoading(false)
        if(response.error){
            setError(true)
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

        setError(false)
        return toast.success('Usuario registrado correctamente')
    }
    return {
        register,
        isloading,
        error,
        setError
    }
}
