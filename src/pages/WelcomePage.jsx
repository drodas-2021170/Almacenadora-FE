import React from 'react'
import { Link } from 'react-router-dom'

export const WelcomePage = () => {

    return (
        <>

        <div>
            <h1>WELCOME</h1>
            <Link to='/login'>
                <button>Login</button>
            </Link>
            <Link to='/register'>
                <button>Register</button>
            </Link>

        </div>
        </>
    )
}
