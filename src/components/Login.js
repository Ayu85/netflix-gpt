import React, { useState } from 'react'
import Header from './Header'
import bgLogo from "../assets/Bg.jpg"
import Footer from './Footer'
import { FaEye } from "react-icons/fa6";
import { FaEyeLowVision } from "react-icons/fa6";

const Login = () => {
    const [showPass, setShowPass] = useState(false)
    const tooglePassword = () => {
        setShowPass(!showPass)
    }
    console.log(showPass);
    return (
        <div className='relative lg:h-[70vw] md:h-[130vw] sm:h-[150vw]'>
            <Header />
            <div className='absolute'
            ><img src={bgLogo} alt='logo' className=' md:h-[130vw] sm:h-[150vw] bg-cover lg:h-[70vw]' />
            </div>
            <div className='absolute bg-[#000000d8] flex flex-col gap-4 h-[600px] px-20 py-20 left-[50%] -translate-x-[50%] mt-28 z-50  '>
                <h1 className='text-3xl pb-4 font-semibold text-white'>Sign in</h1>
                <input type='mail' placeholder='Email or phone number' className='w-[320px] h-[50px]  rounded-md placeholder-shown:bg-[#333333] outline-none border-b-orange-400 border-b pl-2 tracking-wider' />
                <div className='relative'>
                    <input type={!showPass ? "password" : "text"} placeholder='Password' className='w-[320px] h-[50px] rounded-md  placeholder-shown:bg-[#333333] outline-none pl-2 border-b-orange-400 border-b tracking-wider' />
                    {!showPass ? <FaEye className='text-[#949494] text-2xl absolute right-3 top-3 cursor-pointer ' onClick={tooglePassword} />
                        : <FaEyeLowVision className='text-[#949494] text-2xl absolute right-3 top-3 cursor-pointer ' onClick={tooglePassword} />
                    }</div>
                <button className='bg-[#E50914] w-[320px] h-[50px] mt-7 rounded-md text-white text-lg'>Sign In</button>
                <div className='flex justify-between w-[320px] h-[50px] -mt-5 text-sm font-semibold'>
                    <div className='text-[#ADADAD] flex items-center gap-1'>
                        <input type='checkbox' className='  peer-checked:bg-slate-900 ' /><label>Remember me</label>
                    </div>
                    <div className='text-[#ADADAD] flex items-center gap-1'>Need Help?</div>
                </div>
                <div className='flex flex-col gap-3 mt-5 w-[320px] text-[#ADADAD] h-[50px]'>
                    <h1>New to Netflix?<span className='text-white pl-2'>Sign up now</span></h1>
                    <h1 className='text-sm'>This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        <span className='text-blue-500'>Learn more</span></h1>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login
