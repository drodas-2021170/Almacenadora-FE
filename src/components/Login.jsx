import React, { useState } from 'react'
import { useLogin } from '../shared/hooks/useLogin'
import { Input } from './Input'
import { Link } from 'react-router-dom'

export const Login = () => {

    const [userInformation, setUserInformation]= useState("")
    const [password, setPassword]= useState("")

    const [formValidation, setFormValidation] = useState({
        userInformation: undefined,
        password: undefined
    })

    const disabled = formValidation.userInformation === "" && formValidation.password === ""

    const {login, isLoading} = useLogin()

    const handleSubmit = async (event) => {
        event.preventDefault()
        login(userInformation, password)
    }

    const handleChangeUserInformation = (event)=>{
        const value = event.target.value
        setFormValidation({...formValidation, userInformation: value.length>0?'':'Please field this field'})
        setUserInformation(value)
    }

    const handleChangePassword = (event)=>{
        const value = event.target.value
        setFormValidation({...formValidation, password: value.length>0?'':'Please field this field'})
        setPassword(value)
    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <p>Not have account?<Link to='/register'>Register here</Link></p>
                <Input label='Username or Email' type='text' value={userInformation} handleValueChange={handleChangeUserInformation}/>


                <Input  label='Password' type='password' value={password} handleValueChange={handleChangePassword}/>
                
                <button disabled={!disabled}>Sign in</button>
                
            </form>
        </>
    )
}
