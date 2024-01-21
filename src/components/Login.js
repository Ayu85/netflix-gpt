import React from 'react'
import Header from './Header'
import bgLogo from "../assets/Bg.jpg"
const Login = () => {
    return (
        <div className='relative'>
            <Header />
            <div className='absolute'
            ><img src={bgLogo} alt='logo' className=' md:h-[100vw] sm:h-[100vw] lg:h-auto object-fill w-full' />
            </div>
            <div className='absolute bg-[#0f0f0fd8] flex flex-col gap-4 px-20 py-4 left-[50%] -translate-x-[50%] translate-y-[50%]  z-50 '>
                <h1 className='text-3xl pb-4 text-white'>Sign in</h1>
                <input type='mail' className='w-80 h-12  rounded-md bg-slate-50 pl-2' />
                <input type='password' className='w-80 h-12 rounded-md bg-slate-50 pl-2 text-lg' />
                <button className='bg-[#E50914] w-80 h-12 rounded-md text-white text-lg'>Sign In</button>
            </div>

        </div>
    )
}

export default Login
