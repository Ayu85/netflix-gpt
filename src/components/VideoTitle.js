import React from 'react'
import { FaPlay } from "react-icons/fa6";
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className=' items-center bg-gradient-to-r from-[#0f0f0f61] flex absolute  text-white top-0   pl-5 aspect-video w-screen'>
            <div className='max-w-96  '>
                <h1 className='text-4xl font-bold mb-5'>{title}</h1>
                <h1>{overview}</h1>
                <buttonsection className="flex gap-3 pt-3">
                    <button className='bg-[#a9a5a5c6] hover:bg-[#87868691] px-6 py-2 text-lg rounded-md font-semibold tracking-wide flex items-center gap-1'><FaPlay className='text-zinc-800'/>
                        Play</button>
                    <button className='bg-[#888787c6]  hover:bg-[#87868691] px-6 py-2 text-lg rounded-md font-semibold tracking-wide flex items-center gap-1'><CiCircleInfo  className='text-zinc-800'/>
                        More Info</button>

                </buttonsection>
            </div>
        </div>
    )
}

export default VideoTitle
