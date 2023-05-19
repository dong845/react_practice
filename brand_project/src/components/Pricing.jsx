import React from 'react'
import { CheckIcon } from '@heroicons/react/solid';

const Pricing = () => {
  return (
    <div name="pricing" className="w-full mt-10">
        <div className="w-full h-[800px] bg-slate-900 absolute"></div>
        <div className="flex flex-col text-center mx-20 w-max-[1240px]">
            <h2 className="uppercase text-gray-600 z-10 mt-10 text-3xl">Pricing</h2>
            <p className="text-white text-5xl z-10 font-bold my-10">The right price for your research.</p>
            <p className='text-3xl text-gray-600 z-10 mb-10'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
            laudantium odio ullam inventore aliquid ipsum quasi tenetur velit
            volupt. </p>
        </div>
        <div className="grid md:grid-cols-2 mx-20 gap-y-3 md:gap-5">
            <div className="bg-white rounded-xl p-6 flex flex-col z-10 text-start shadow-2xl mb-20">
                <p className="text-sm w-24 py-1 bg-indigo-400 text-indigo-700 rounded-2xl pl-2 pr-2 my-4">STANDARD</p>
                <p className="text-black text-lg"><span className="text-5xl font-extrabold mb-10 pr-1">$49</span>/mo</p>
                <p className='text-2xl py-5 text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <div className="flex my-5">
                    <CheckIcon className="w-8 mr-4 text-black"/>
                    <p className="text-xl">Lorem, ipsum dolor.</p>
                </div>
                <div className="flex my-5">
                    <CheckIcon className="w-8 mr-4 text-black"/>
                    <p className="text-xl">Lorem, ipsum dolor.</p>
                </div>
                <div className="flex my-5">
                    <CheckIcon className="w-8 mr-4 text-black"/>
                    <p className="text-xl">Lorem, ipsum dolor.</p>
                </div>
                <div className="flex my-5">
                    <CheckIcon className="w-8 mr-4 text-black"/>
                    <p className="text-xl">Lorem, ipsum dolor.</p>
                </div>
                <div className="flex my-5">
                    <CheckIcon className="w-8 mr-4 text-black"/>
                    <p className="text-xl">Lorem, ipsum dolor.</p>
                </div>
                <button className="text-center bg-slate-800 text-white py-2 text-xl mb-5 rounded-xl hover:bg-indigo-600 hover:text-white">Get Started</button>
            </div>

            <div className="bg-white rounded-xl p-6 flex flex-col z-10 text-start shadow-2xl mb-20">
                <p className=" uppercase text-sm w-24 py-1 bg-indigo-400 text-indigo-700 rounded-2xl pl-2 pr-2 my-4">Enterprise</p>
                <p className="text-black text-lg"><span className="text-5xl font-extrabold mb-10 pr-1">$89</span>/mo</p>
                <p className='text-2xl py-5 text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <div className="flex my-5">
                    <CheckIcon className="w-8 mr-4 text-black"/>
                    <p className="text-xl">Lorem, ipsum dolor.</p>
                </div>
                <div className="flex my-5">
                    <CheckIcon className="w-8 mr-4 text-black"/>
                    <p className="text-xl">Lorem, ipsum dolor.</p>
                </div>
                <div className="flex my-5">
                    <CheckIcon className="w-8 mr-4 text-black"/>
                    <p className="text-xl">Lorem, ipsum dolor.</p>
                </div>
                <div className="flex my-5">
                    <CheckIcon className="w-8 mr-4 text-black"/>
                    <p className="text-xl">Lorem, ipsum dolor.</p>
                </div>
                <div className="flex my-5">
                    <CheckIcon className="w-8 mr-4 text-black"/>
                    <p className="text-xl">Lorem, ipsum dolor.</p>
                </div>
                <button className="text-center bg-slate-800 text-white py-2 text-xl mb-5 rounded-xl hover:bg-indigo-600 hover:text-white">Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Pricing