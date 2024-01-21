import React from 'react'
import Header from './Header'
import bgLogo from "../assets/Bg.jpg"
const Login = () => {
    return (
        <div className='relative'>
            <Header />
            <div className='absolute'
            ><img src={bgLogo} alt='logo' />
            </div>
        </div>
    )
}

export default Login
