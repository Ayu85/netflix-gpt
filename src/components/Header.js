import React, { useState } from 'react'
import logo from "../assets/Main_logo.png"
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    return (
        <div className='bg-gradient-to-b from-black w-full absolute z-50 pl-2 '>
            <img src={logo} alt='logo' className='w-48' />
        </div>
    )
}
export const BrowseHeader = () => {
    const [showUserData, setShowUser] = useState(false)
    const navigate = useNavigate();
    const userData = useSelector(store => store.user.userData)
    return <div className='bg-gradient-to-b from-black w-full absolute flex justify-between z-50 pl-2 '>
        <div className='pl-5 pt-2'> <img src={logo} alt='logo' className='w-48 md:w-48 sm:w-32' /></div>
        <div className='relative'><button className=' bg-[#E50914] px-3 h-8
         rounded-md font-semibold mr-20 mt-7  text-white z-50 sm:mt-5' onClick={() => {
                const auth = getAuth();
                signOut(auth).then(() => {
                    // Sign-out successful.
                    navigate('/')

                }).catch((error) => {
                    // An error happened.
                });

            }} onMouseEnter={() => {
                setShowUser(true)
            }} onMouseLeave={() => {
                setShowUser(false)
            }}>Sign out</button>
            {showUserData && <div className='text-white z-50 absolute right-0 bg-[#232323] px-2 py-2 mr-2'>USER: {userData.email}</div>
            }        </div>

    </div>
}

export default Header
