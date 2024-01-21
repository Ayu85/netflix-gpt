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
            <div className='absolute bg-[#0f0f0f93] flex flex-col gap-4 px-20 py-4 left-[50%] -translate-x-[50%] translate-y-[50%]  z-50 '>
                <h1 className='text-4xl pb-7 text-white'>Sign in</h1>
                <input type='mail' className='w-96 h-14  rounded-md bg-slate-50 pl-2' />
                <input type='password' className='w-96 h-14 rounded-md bg-slate-50 pl-2 text-lg' />

            </div>

        </div>
    )
}

export default Login
