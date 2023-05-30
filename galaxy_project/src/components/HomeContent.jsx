import React from 'react'

const HomeContent = () => {
  return (
    <div className="absolute w-full z-5 text-center">
        <div className="flex flex-col pt-64 md:pt-72">
            <h1 className="text-white font-bold text-6xl pb-3">Galaxy. Travel.</h1>
            <h2 className="text-white text-4xl uppercase pb-5">World's first civilian space travel.</h2>
            <div>
                <button className="mr-2 text-white border w-40 py-2">TRAINING</button>
                <button className="mr-2 text-white border w-40 py-2 bg-gray-500 bg-opacity-90">LAUNCH</button>
            </div>
        </div>
    </div>
  )
}

export default HomeContent