import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#000000d8] gap-10 text-[#ADADAD] absolute bottom-0 w-full px-4 py-8 flex flex-col  items-center ' >
            <div>Questions? Call 000-800-122-355</div>
            <div className='flex gap-28'>
                <div className='flex flex-col gap-5'>
                    <h1>FAQ</h1>
                    <h1>Cookies prefrences</h1>
                </div>
                <div className='flex flex-col gap-5'>
                    <h1>Help center</h1>
                    <h1>Corporate information</h1>
                </div>
                <div >
                    <h1>Terms of use</h1>
                </div>
                <div>
                    <h1>Privacy</h1>
                </div>

            </div>
            <div>
                <select name="Language" id="lang" className='bg-black py-3 px-6 border-slate-500 border ' >
                    <option value="volvo">English</option>
                    <option value="saab">Hindi</option>
                </select>
            </div>

        </div>
    )
}

export default Footer
