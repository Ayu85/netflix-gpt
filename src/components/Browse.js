import React from 'react'
import { BrowseHeader } from './Header'
import bgLogo from "../assets/Bg.jpg"

const Browse = () => {
    return (
        <div className='relative '>
            <BrowseHeader />
            <div className='absolute'
            ><img src={bgLogo} alt='logo' className='filter brightness-50 md:h-[130vw] sm:h-[150vw] bg-cover lg:h-[70vw]' />
            </div>
        </div>
    )
}

export default Browse
