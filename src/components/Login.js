import React, { useRef, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Header from './Header'
import bgLogo from "../assets/Bg.jpg"
import Footer from './Footer'
import { FaEye } from "react-icons/fa6";
import { FaEyeLowVision } from "react-icons/fa6";
import validate from '../utils/validate';
import { auth } from '../utils/firebase';
const Login = () => {
    const [showPass, setShowPass] = useState(false)
    const [emailvalidationError, setEmailValidationError] = useState(null)
    const [passwordvalidationError, setPasswordValidationError] = useState(null)
    const [isSignIn, setSignIn] = useState(true);
    const email = useRef(null);
    const password = useRef(null);
    const signupUser = () => {
        createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
    const signinUser = () => {
        signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    const tooglePassword = () => {
        setShowPass(!showPass)
    }
    const toogleSignIn = () => {
        setSignIn(!isSignIn)
    }
    const handleSumbmit = () => {
        const validateInfo = validate(email?.current?.value, password?.current?.value);
        setEmailValidationError(validateInfo?.emailError)
        setPasswordValidationError(validateInfo?.passwordError);
        emailvalidationError == null &&
            passwordvalidationError == null && !isSignIn ?
            signupUser(auth, password?.current?.value, password?.current?.value) : signinUser(auth, email?.current?.value, password?.current?.value)
    }

    return (
        <div className='relative lg:h-[70vw] md:h-[130vw] sm:h-[150vw]'>
            <Header />
            <div className='absolute'
            ><img src={bgLogo} alt='logo' className=' md:h-[130vw] sm:h-[150vw] bg-cover lg:h-[70vw]' />
            </div>
            {isSignIn && <form onSubmit={(e) => {
                e.preventDefault()
            }} className='absolute bg-[#000000d8] flex flex-col gap-4 h-[600px] px-20 py-20 left-[50%] -translate-x-[50%] mt-28 z-50  '>
                <h1 className='text-3xl pb-4 font-semibold text-white'>Sign in</h1>
                <input type='mail' placeholder='Email or phone number' ref={email} className='w-[320px] h-[50px]  rounded-md placeholder-shown:bg-[#333333] outline-none border-b-orange-400 border-b pl-2 tracking-wider' />
                <span className='text-[#E87C03] -mt-3 ml-1'>{emailvalidationError}</span>
                <div className='relative'>
                    <input type={!showPass ? "password" : "text"} placeholder='Password' ref={password}
                        className='w-[320px] h-[50px] rounded-md  placeholder-shown:bg-[#333333] outline-none pl-2 border-b-orange-400 border-b tracking-wider' />
                    {!showPass ? <FaEye className='text-[#949494] text-2xl absolute right-3 top-3 cursor-pointer ' onClick={tooglePassword} />
                        : <FaEyeLowVision className='text-[#949494] text-2xl absolute right-3 top-3 cursor-pointer ' onClick={tooglePassword} />
                    }</div>
                <span className='text-[#E87C03] -mt-3 ml-1'>{passwordvalidationError}</span>
                <input type="submit" onClick={handleSumbmit} className='bg-[#E50914] w-[320px] h-[50px] mt-7 rounded-md text-white cursor-pointer text-lg' />
                <div className='flex justify-between w-[320px] h-[50px] -mt-5 text-sm font-semibold'>
                    <div className='text-[#ADADAD] flex items-center gap-1'>
                        <input type='checkbox' className='  peer-checked:bg-slate-900 ' /><label>Remember me</label>
                    </div>
                    <div className='text-[#ADADAD] flex items-center gap-1'>Need Help?</div>
                </div>
                <div className='flex flex-col gap-3 mt-5 w-[320px] text-[#ADADAD] h-[50px]'>
                    <h1>New to Netflix?<span className='text-white pl-2 cursor-pointer' onClick={toogleSignIn}>Sign up now</span></h1>
                    <h1 className='text-sm'>This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        <span className='text-blue-500'>Learn more</span></h1>
                </div>
            </form>
            }
            {
                !isSignIn && <form onSubmit={(e) => {
                    e.preventDefault()
                }} className='absolute bg-[#000000d8] flex flex-col gap-4 h-[600px] px-20 py-20 left-[50%] -translate-x-[50%] mt-28 z-50  '>
                    <h1 className='text-3xl pb-4 font-semibold text-white'>Sign up</h1>
                    <input type='text' placeholder='User name' ref={email} className='w-[320px] h-[50px]  rounded-md placeholder-shown:bg-[#333333] outline-none border-b-orange-400 border-b pl-2 tracking-wider' />
                    <input type='mail' placeholder='Email or phone number' ref={email} className='w-[320px] h-[50px]  rounded-md placeholder-shown:bg-[#333333] outline-none border-b-orange-400 border-b pl-2 tracking-wider' />
                    <span className='text-[#E87C03] -mt-3 ml-1'>{emailvalidationError}</span>
                    <div className='relative'>
                        <input type={!showPass ? "password" : "text"} placeholder='Password' ref={password}
                            className='w-[320px] h-[50px] rounded-md  placeholder-shown:bg-[#333333] outline-none pl-2 border-b-orange-400 border-b tracking-wider' />
                        {!showPass ? <FaEye className='text-[#949494] text-2xl absolute right-3 top-3 cursor-pointer ' onClick={tooglePassword} />
                            : <FaEyeLowVision className='text-[#949494] text-2xl absolute right-3 top-3 cursor-pointer ' onClick={tooglePassword} />
                        }</div>
                    <span className='text-[#E87C03] -mt-3 ml-1'>{passwordvalidationError}</span>
                    <input type="submit" onClick={handleSumbmit} className='bg-[#E50914] w-[320px] h-[50px] mt-7 rounded-md text-white cursor-pointer text-lg' />
                    <div className='flex justify-between w-[320px] h-[50px] -mt-5 text-sm font-semibold'>
                        <div className='text-[#ADADAD] flex items-center gap-1'>
                            <input type='checkbox' className='  peer-checked:bg-slate-900 ' /><label>Remember me</label>
                        </div>
                        <div className='text-[#ADADAD] flex items-center gap-1'>Need Help?</div>
                    </div>
                    <div className='flex flex-col gap-3 mt-5 w-[320px] text-[#ADADAD] h-[50px]'>
                        <h1>Already have account?<span className='text-white pl-2 cursor-pointer' onClick={toogleSignIn}>Sign In</span></h1>
                        <h1 className='text-sm'>This page is protected by Google reCAPTCHA to ensure you're not a bot.
                            <span className='text-blue-500'>Learn more</span></h1>
                    </div>
                </form>
            }
            <Footer />
        </div>
    )
}

export default Login
