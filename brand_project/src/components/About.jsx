import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full bg-white flex flex-col items-center py-10">
        <div className="text-center">
            <h1 className="text-6xl font-bold sm:text-4xl py-3">Trusted by developers across the world</h1>
            <p className="text-xl text-gray-500 pt-2 pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum socis natoque penatibus et justo.</p>
        </div>
        <div className="py-3 grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="flex flex-col py-10 px-20 rounded-xl shadow-xl text-center">
                <h1 className="text-5xl text-indigo-500 font-bold py-2">100%</h1>
                <p className="text-sm text-gray-500">Competition</p>
            </div>
            <div className="flex flex-col py-10 px-20 rounded-xl shadow-xl text-center">
                <h1 className="text-5xl text-indigo-500 font-bold py-2">24/7</h1>
                <p className="text-sm text-gray-500">Delivery</p>
            </div>
            <div className="flex flex-col py-10 px-20 rounded-xl shadow-xl text-center">
                <h1 className="text-5xl text-indigo-500 font-bold py-2">100K</h1>
                <p className="text-sm text-gray-500">Transactions</p>
            </div>
        </div>
    </div>
  )
}

export default About