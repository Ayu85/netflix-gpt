import React, { useEffect, useState } from 'react'
import logo from "../assets/Main_logo.png"
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FcOk } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { CiLogout } from "react-icons/ci";
import { addUser, removeUser } from './redux/userslice';
import { auth } from '../utils/firebase';
import { SiElasticsearch } from "react-icons/si";
import { toogleGPT } from './redux/GPTslice';
import { addLanguage } from './redux/languageslice';
const Header = () => {
    const navigate = useNavigate();
    const dispatch_action = useDispatch();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { email, uid } = user;
                dispatch_action(addUser({ email: email, uid: uid }))
                navigate('/browse')

            } else {
                // User is signed out
                // ...
                dispatch_action(removeUser())
                navigate('/')
            }
        });
    }, [])

    return (
        <div className='bg-gradient-to-b from-black w-full absolute z-50 pl-2 '>
            <img src={logo} alt='logo' className='w-48' />
        </div>
    )
}
export const BrowseHeader = () => {
    const navigate = useNavigate();
    const dispatch_action = useDispatch();
    const showGPT = useSelector(store => store.gpt.value)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { email, uid } = user;
                dispatch_action(addUser({ email: email, uid: uid }))
                navigate('/browse')

            } else {
                // User is signed out
                // ...
                dispatch_action(removeUser())
                navigate('/')
            }
        });
    }, [])
    const [showUserData, setShowUser] = useState(false)
    const userData = useSelector(store => store.user.userData)
    return <div className=' overflow-hidden absolute z-50 bg-gradient-to-b from-black to-[#1d1c1c01] w-full items-center flex justify-between pl-2 '>
        <div className='pl-5 pt-2'> <img src={logo} alt='logo' className='w-32 md:w-34 sm:w-32 lg:w-44' /></div>
        <div className=' flex  h-20'>
            {showGPT && <div className='mt-8 h-8 px-3'>
                <select name="Language" onClick={(e) => {
                    dispatch_action(addLanguage(e.target.value))
                }} id="lang" className='bg-black py-1 px-6 border-slate-700 border text-white' >
                    <option value="en" >English</option>
                    <option value="hindi">Hindi</option>
                </select>
            </div>}
            <button className='bg-green-600 px-3 h-8
         rounded-md font-semibold mr-10 mt-8 text-white flex items-center gap-1' onClick={() => {
                    dispatch_action(toogleGPT())
                }}><SiElasticsearch />
                GPT Search</button>

            <button className=' bg-[#E50914] px-3 h-8
         rounded-md font-semibold mr-10 mt-8 flex items-center gap-1 text-white z-50 ' onClick={() => {
                    const auth = getAuth();
                    signOut(auth).then(() => {
                        // Sign-out successful.
                        // navigate('/')
                    }).catch((error) => {
                        // An error happened.
                    });
                }} onMouseEnter={() => {
                    setShowUser(true)
                }} onMouseLeave={() => {
                    setShowUser(false)
                }}><CiLogout className='text-white font-bold' />
                Sign out</button>
            {
                showUserData && < div className='text-white z-50 absolute  duration-100 
             transition-all bg-[#232323] px-3 py-2 mr-2 flex items-center right-5 top-14 gap-2'><FcBusinessman />
                    {userData?.email} <FcOk />
                </div>
            }
        </div>

    </div>
}

export default Header
