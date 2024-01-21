import React from 'react'
import Header from './Header'
import bgLogo from "../assets/Bg.jpg"
const Login = () => {
    return (
        <div className='relative'>
            <Header />
            <div className='absolute'
            ><img src={bgLogo} alt='logo' className='md:h-[100vw] sm:h-[100vw] lg:h-auto object-fill w-full' />
            </div>
        </div>
    )
}

export default Login
