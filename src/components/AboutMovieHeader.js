import React from 'react'
import logo from '../assets/Main_logo.png'
import bgLogo from "../assets/Bg.jpg"

const AboutMovieHeader = () => {
    return (
        <div className='relative'>
            <div className='bg-gradient-to-b from-black absolute z-10 w-screen'>
                <img src={logo} alt='logo' className='w-44' />
            </div>
            <img src={bgLogo} alt='logo' className='w-screen h-screen absolute filter brightness-50' />
            </div>
    )
}

export default AboutMovieHeader
