import React from 'react'
import bgLogo from "../assets/Bg.jpg"

const GPTsearch = () => {
    return (
        <div >
            <div className='absolute'
            ><img src={bgLogo} alt='logo' className=' filter brightness-50 md:h-[130vw] sm:h-[150vw] bg-cover lg:h-[70vw]' />
            </div>
            <div className='absolute z-50 bg-zinc-800 flex ml-[50%] -translate-x-[50%] mt-[30%] -translate-y-[50%]'>
                <input type='text' className='w-96 rounded-l-full px-6 py-3 text-xl ml-3 ' />
                <button className='bg-green-400 text-white px-6 py-3 text-xl rounded-r-full'>Search</button>
            </div>
        </div>
    )
}

export default GPTsearch
