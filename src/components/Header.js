import React from 'react'
import logo from "../assets/Main_logo.png"
const Header = () => {
    return (
        <div className='bg-gradient-to-b from-black w-full absolute z-50 pl-2 '>
            <img src={logo} alt='logo' width={210} />
        </div>
    )
}
export const BrowseHeader = () => {
    return <div >
        < Header  />
        <button className='absolute right-0 text-white z-50 font-semibold'>Sign out</button>
    </div>
}

export default Header
