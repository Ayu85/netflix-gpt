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
            <div className='absolute bg-[#0f0f0fe7] flex flex-col gap-4 px-20 py-4 left-[50%] -translate-x-[50%] translate-y-[50%]  z-50 '>
                <h1 className='text-3xl pb-4 font-semibold text-white'>Sign in</h1>
                <input type='mail' placeholder='Email or phone number' className='w-[320px] h-[50px]  rounded-md placeholder-shown:bg-[#333333] outline-none border-b-orange-400 border-b pl-2 tracking-wider' />
                <input type='password' placeholder='Password' className='w-[320px] h-[50px] rounded-md  placeholder-shown:bg-[#333333] outline-none pl-2 border-b-orange-400 border-b tracking-wider' />
                <button className='bg-[#E50914] w-[320px] h-[50px] mt-7 rounded-md text-white text-lg'>Sign In</button>
                <div>
                    <div className='text-[#737373] flex items-center gap-1'>
                        <input type='checkbox' className='appearance-none default:ring-2 ring-white ' /><label>Remember me</label>
                    </div>
                    <div></div>
                </div>
            </div>

        </div>
    )
}

export default Login
