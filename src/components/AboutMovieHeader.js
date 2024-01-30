import React from 'react'
import logo from '../assets/Main_logo.png'
import bgLogo from "../assets/Bg.jpg"

const AboutMovieHeader = () => {
    return (
        <div className='relative'>
            <div className='absolute z-50 w-screen h-screen '>
                <img src={logo} alt='logo' className='w-44' />
            </div>
            <img src={bgLogo} alt='logo' className='w-screen h-screen absolute filter brightness-50' />
            </div>
    )
}

export default AboutMovieHeader
