import React from 'react'
import logo from "../assets/Main_logo.png"
const Header = () => {
    return (
        <div className='bg-gradient-to-b from-black w-full absolute z-50 pl-2 '>
            <img src={logo} alt='logo' className='w-48' />
        </div>
    )
}
export const BrowseHeader = () => {
    return <div className='bg-gradient-to-b from-black w-full absolute flex justify-between z-50 pl-2 '>
        <div className='pl-5 pt-2'> <img src={logo} alt='logo' className='w-48 md:w-48 sm:w-32' /></div>
        <button className=' bg-[#E50914] px-2 py-1 h-9 rounded-md mr-20 mt-7  text-white z-50 font-semibold'>Sign out</button>
    </div>
}

export default Header
