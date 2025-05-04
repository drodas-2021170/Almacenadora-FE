import React, { useState } from 'react'
import { Input } from './Input'
import { useRegister } from '../shared/hooks/useRegister'
import { Link } from 'react-router-dom'

export const Register = () => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [formValidation, setFormValidation] =useState(
        {
            name:undefined,
            surname:undefined,
            phone:undefined,
            email:undefined,
            username:undefined,
            password:undefined,
            confirmPassword:undefined
        }
    )

    const {register} = useRegister()

    const disabled = formValidation.name === "" && formValidation.surname === "" 
                        && formValidation.phone === "" && formValidation.email === "" 
                        && formValidation.username === "" && formValidation.password === "" 
                        && formValidation.confirmPassword === ""
    const handleSubmit = async (event) => {
        event.preventDefault()
        register(name,surname,email,username,password,phone)
    }


    const handleChangeName = (event)=>{
        const value = event.target.value
        setFormValidation({...formValidation, name: value.length>0?'':'Please field this field'})
        setName(value)
    }
    
    const handleChangeSurname = (event)=>{
        const value = event.target.value
        setFormValidation({...formValidation, surname: value.length>0?'':'Please field this field'})
        setSurname(value)

    }
    const handleChangePhone = (event)=>{
        const value = event.target.value
        setFormValidation({...formValidation, phone: value.length>=8?'':'Please field this field'})
        setPhone(value)

    }

    const handleChangeEmail = (event)=>{
        const value = event.target.value
        const regex = /\S+@\S+\.\S+/
        setFormValidation({...formValidation, email: regex.test(value)?'':'Write a valid email'})
        setEmail(value)
    }

    const handleChangeUsername = (event)=>{
        const value = event.target.value
        setFormValidation({...formValidation, username: value.length>0?'':'Please field this field'})
        setUsername(value)
    }


    const handleChangePassword = (event)=>{
        const value = event.target.value
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/
        setFormValidation({...formValidation, password: regex.test(value)?'':'Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character.'})
        setPassword(value)
    }

    const handleChangeConfirmPassword = (event)=>{ 
        const value = event.target.value
        setFormValidation({...formValidation, confirmPassword: value === password?'':'Passwords do not match'})
        setConfirmPassword(value)
    }

    return (
        <>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
        <p>Already have account?<Link to='/login'>Sign up here</Link></p>
            <Input label='Name' value={name} type='text' handleValueChange={handleChangeName}/>
            <span>{formValidation.name}</span>

            <Input label='Surname' value={surname} type='text' handleValueChange={handleChangeSurname}/>
            <span>{formValidation.surname}</span>

            <Input label='Phone' value={phone} type='text' handleValueChange={handleChangePhone} />
            <span>{formValidation.phone}</span>

            <Input label='Email' value={email} type='text' handleValueChange={handleChangeEmail}/>
            <span>{formValidation.email}</span>

            <Input label='Username' value={username} type='text' handleValueChange={handleChangeUsername}/>
            <span>{formValidation.username}</span>

            <Input label='Password' value={password} type='password' handleValueChange={handleChangePassword}/>
            <span>{formValidation.password}</span>

            <Input label='Confirm Password' value={confirmPassword} type='password' handleValueChange={handleChangeConfirmPassword}/>
            <span>{formValidation.confirmPassword}</span>

            <button type="submit" disabled={!disabled}>
                Register
            </button>
        </form>
        </>
    )
}
