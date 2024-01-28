import React, { useEffect, useState } from 'react'
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
    const [emailvalidationError, setEmailValidationError] = useState(false)

    const [isSignIn, setSignIn] = useState(true);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const validateInfo = validate(email, password);
        setEmailValidationError(validateInfo)
        // console.log(validateInfo);
    }, [email, password])



    const signupUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, " ", errorMessage, "sign up function");
                // ..
            })
        console.log("sign up");
    }
    const signinUser = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, " ", errorMessage, "sign in function");
            });
        console.log("signed in");
    }
    const tooglePassword = () => {
        setShowPass(!showPass)
    }
    const toogleSignIn = () => {
        setSignIn(!isSignIn)
    }
    const handleSumbmit = () => {
        if (emailvalidationError) return;
        !isSignIn ? signupUser(email, password) : signinUser(email, password);
    }

    return (
        <div className='relative lg:h-[70vw] md:h-[130vw] sm:h-[150vw] '>
            <Header />
            <div className='absolute'
            ><img src={bgLogo} alt='logo' className='h-screen filter brightness-50 md:h-[130vw] sm:h-[150vw] bg-cover lg:h-[70vw]' />
            </div>
            {isSignIn && <form onSubmit={(e) => {
                e.preventDefault()
            }} className='absolute bg-[#000000d8] flex flex-col gap-4 h-[600px] px-20 py-20 left-[50%] -translate-x-[50%] mt-28 z-50  '>
                <h1 className='text-3xl pb-4 font-semibold text-white'>Sign in</h1>
                <input type='mail' placeholder='Email or phone number' value={email} onChange={(e) => {
                    setEmail(e.target.value)

                }} className='w-[320px] h-[50px]  rounded-md placeholder-shown:bg-[#333333] outline-none border-b-orange-400 border-b pl-2 tracking-wider' />
                {/* <span className='text-[#E87C03] -mt-3 ml-1'>{emailvalidationError}</span> */}
                <div className='relative'>
                    <input type={!showPass ? "password" : "text"} placeholder='Password' onChange={(e) => {
                        setPassword(e.target.value)
                    }} value={password}
                        className='w-[320px] h-[50px] rounded-md  placeholder-shown:bg-[#333333] outline-none pl-2 border-b-orange-400 border-b tracking-wider' />
                    {!showPass ? <FaEye className='text-[#949494] text-2xl absolute right-3 top-3 cursor-pointer ' onClick={tooglePassword} />
                        : <FaEyeLowVision className='text-[#949494] text-2xl absolute right-3 top-3 cursor-pointer ' onClick={tooglePassword} />
                    }</div>
                <span className='text-[#E87C03] -mt-3 ml-1'>{emailvalidationError && "InvalidEmail/password"}</span>
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
                    <input type='text' placeholder='User name' className='w-[320px] h-[50px]  rounded-md placeholder-shown:bg-[#333333] outline-none border-b-orange-400 border-b pl-2 tracking-wider' />
                    <input type='mail' placeholder='Email or phone number' onChange={(e) => {
                        setEmail(e.target.value)
                    }} value={email} className='w-[320px] h-[50px]  rounded-md placeholder-shown:bg-[#333333] outline-none border-b-orange-400 border-b pl-2 tracking-wider' />

                    <div className='relative'>
                        <input type={!showPass ? "password" : "text"} placeholder='Password' onChange={(e) => {
                            setPassword(e.target.value)
                        }} value={password}
                            className='w-[320px] h-[50px] rounded-md  placeholder-shown:bg-[#333333] outline-none pl-2 border-b-orange-400 border-b tracking-wider' />
                        {!showPass ? <FaEye className='text-[#949494] text-2xl absolute right-3 top-3 cursor-pointer ' onClick={tooglePassword} />
                            : <FaEyeLowVision className='text-[#949494] text-2xl absolute right-3 top-3 cursor-pointer ' onClick={tooglePassword} />
                        }</div>
                    <span className='text-[#E87C03] -mt-3 ml-1'>{emailvalidationError && "Invalid email/password"}</span>
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
