import React from 'react'

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'

import supportImg from '../assets/support.jpg'

const Support = () => {
  return (
    <div name="support" className="w-full mt-20">
      <div className='w-full h-[600px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
      </div>
      <div className = "text-center flex flex-col">
        <div className="px-10 py-5 z-10 md:my-20 w-max-[1240px]">
            <h2 className='text-xl md:text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
            <p className=" text-3xl md:text-5xl text-white pt-5">Finding the right team</p>
            <p className=" text-lg md:text-2xl pt-5 text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8 z-10 mx-10 pt-12 sm:pt-20">
            <div className="flex flex-col px-5 bg-white rounded-xl shadow-xl my-6 text-start py-5">
                <div className="w-12 h-12 rounded-lg bg-indigo-500 mt-[-3rem]"><PhoneIcon className="w-8 mt-2 mx-auto text-white" /></div>
                <h2 className="text-2xl font-bold my-6">Sales</h2>
                <p className="text-gray-500 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                <p className="text-indigo-500 text-md font-bold flex mr-2 mt-10">Contact Us <ArrowSmRightIcon className="w-5"/></p>
            </div>

            <div className="flex flex-col px-5 bg-white rounded-xl shadow-xl my-6 text-start py-5">
                <div className="w-12 h-12 rounded-lg bg-indigo-500 mt-[-3rem]"><SupportIcon className="w-8 mt-2 mx-auto text-white" /></div>
                <h2 className="text-2xl font-bold my-6">Technical Support</h2>
                <p className="text-gray-500 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                <p className="text-indigo-500 text-md font-bold flex mr-2 mt-10">Contact Us <ArrowSmRightIcon className="w-5"/></p>
            </div>

            <div className="flex flex-col px-5 bg-white rounded-xl shadow-xl my-6 text-start py-5">
                <div className="w-12 h-12 rounded-lg bg-indigo-500 mt-[-3rem]"><ChipIcon className="w-8 mt-2 mx-auto text-white" /></div>
                <h2 className="text-2xl font-bold my-6">Media Inquiries</h2>
                <p className="text-gray-500 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                <p className="text-indigo-500 text-md font-bold flex mr-2 mt-10">Contact Us <ArrowSmRightIcon className="w-5"/></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Support