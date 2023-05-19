import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'

import bgImg from '../assets/cyber-bg.png'

const Hero = () => {
  return (
    <div name="home" className="w-full md:h-screen flex flex-col bg-zinc-200 justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1240px] gap-5 m-auto mt-[10%]">
            <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
                <p className="py-2 text-2xl">Unique Sequencing & Production</p>
                <h1 className="py-3 text-5xl font-bold md:text-7xl">Cloud Management</h1>
                <p className="py-4 text-2xl">This is our tech brand.</p>
                <button className="text-white bg-indigo-500 py-2 px-4 rounded-lg w-[30%] text-xl">Get Started</button>
            </div>
            <div>
                <img className="w-full bg-zinc-200" src={bgImg} alt=""/>
            </div>
        </div>
        <div className="flex flex-col py-3 md:w-[60%] md:m-auto 
            px-3 bg-zinc-200 border border-slate-300 md:rounded-xl text-center shadow-xl ">
            <p className="text-center text-xl py-3 font-bold">Data Services</p>
            <ul className="flex flex-wrap justify-between">
                <li className="flex text-gray-500"><CloudUploadIcon className="w-8 px-2 text-indigo-500" /> App Security</li>
                <li className="flex text-gray-500"><DatabaseIcon className="w-8 px-2 text-indigo-500" /> Dashboard Deisgn</li>
                <li className="flex text-gray-500"><PaperAirplaneIcon className="w-8 px-2 text-indigo-500" /> Cloud Data</li>
                <li className="flex text-gray-500"><ServerIcon className="w-8 px-2 text-indigo-500" /> Api Services</li>
            </ul>
        </div>
    </div>
  )
}

export default Hero