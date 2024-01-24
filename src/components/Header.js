import React from 'react'
import logo from "../assets/Main_logo.png"
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-gradient-to-b from-black w-full absolute z-50 pl-2 '>
            <img src={logo} alt='logo' className='w-48' />
        </div>
    )
}
export const BrowseHeader = () => {
    const navigate = useNavigate();
    return <div className='bg-gradient-to-b from-black w-full absolute flex justify-between z-50 pl-2 '>
        <div className='pl-5 pt-2'> <img src={logo} alt='logo' className='w-48 md:w-48 sm:w-32' /></div>
        <button className=' bg-[#E50914] px-2 h-8
         rounded-md mr-20 mt-7  text-white z-50 font-semibold' onClick={() => {
                const auth = getAuth();
                signOut(auth).then(() => {
                    // Sign-out successful.
                    navigate('/')

                }).catch((error) => {
                    // An error happened.
                });

            }}>Sign out</button>
    </div>
}

export default Header
