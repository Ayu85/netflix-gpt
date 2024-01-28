import React from 'react'
import { FaPlay } from "react-icons/fa6";
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className=' items-center bg-gradient-to-r from-[#0f0f0f9b] flex absolute  text-white top-0   pl-5 aspect-video w-screen'>
            <div className='lg:max-w-96 md:max-w-44  '>
                <h1 className='lg:text-4xl font-bold mb-5 md:text-2xl'>{title}</h1>
                <h1 className=' hidden lg:flex'>{overview}</h1>
                <buttonsection className=" gap-3 pt-3 hidden md:flex">
                    <button className='bg-[#a9a5a5c6] hover:bg-[#87868691] px-6 md:px-4 md:py-1 md:text-sm md:h-12 py-2 text-lg rounded-md font-semibold tracking-wide flex items-center gap-1'><FaPlay className='text-zinc-800' />
                        Play</button>
                    <button className='bg-[#888787c6]  hover:bg-[#87868691] px-6 md:px-4 md:py-1 md:text-sm md:h-12  py-2 text-lg rounded-md font-semibold tracking-wide flex items-center gap-1'><CiCircleInfo className='text-zinc-800' />
                        More Info</button>

                </buttonsection>
            </div>
        </div>
    )
}

export default VideoTitle
