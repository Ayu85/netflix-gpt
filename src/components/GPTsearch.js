import React from 'react'
import bgLogo from "../assets/Bg.jpg"
import { Language } from '../utils/constants'
import { useSelector } from 'react-redux'
const GPTsearch = () => {
    const currentLanguage = useSelector(store => store.language.language)
    return (
        <div >
            <div className='absolute'
            ><img src={bgLogo} alt='logo' className=' h-[170vw] filter brightness-50 md:h-[130vw] sm:h-[150vw] bg-cover lg:h-[70vw]' />
            </div>
            <div className='absolute z-50 bg-zinc-800 flex ml-[50%] -translate-x-[50%] mt-[20%] '>
                <input type='text' placeholder={currentLanguage === 'en' ? Language.en.placeholder : Language.hindi.placeholder} className='placeholder-shown:bg-zinc-800 border-green-600 border-2 ring-1 ring-green-600 lg:w-[500px] sm:w-96 rounded-l-full px-6 py-3 text-xl ml-3 ' />
                <button className='bg-green-600 text-white px-6 py-3 text-xl rounded-r-full border-green-600 border-2 ring-1 ring-green-600 w-36'>{currentLanguage === "en" ? Language.en.buttonText : Language.hindi.buttonText}</button>
            </div>
        </div>
    )
}

export default GPTsearch
