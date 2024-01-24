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
    return <div className=' overflow-x-hidden h-28 bg-gradient-to-b from-black w-full absolute flex justify-between z-50 pl-2 '>
        <div className='pl-5 pt-2'> <img src={logo} alt='logo' className='w-48 md:w-48 sm:w-32' /></div>
        <div className='relative h-20'><button className=' bg-[#E50914] px-3 h-8
         rounded-md font-semibold mr-20 mt-7 flex items-center gap-1 text-white z-50 sm:mt-5' onClick={() => {
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
                showUserData && < div className='text-white z-50 absolute right duration-100 
             transition-all bg-[#232323] px-3 py-2 mr-2 flex items-center -left-10 top-14 gap-2'><FcBusinessman />
                    {userData?.email} <FcOk />
                </div>
            }        </div>

    </div>
}

export default Header
