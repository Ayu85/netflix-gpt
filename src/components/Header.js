import React from 'react'
import logo from "../assets/Main_logo.png"
const Header = () => {
    return (
        <div className='bg-gradient-to-b from-black w-full absolute z-50 '>
            <img src={logo} alt='logo' width={200} />
        </div>
    )
}

export default Header
