import React from 'react'
import {Link} from "react-router-dom"
import a1 from "../assets/a1.png"
import a2 from "../assets/a2.png"

const TrainingContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-64 md:gap-10 mx-20 pt-[100px] md:pt-[250px]">
        <div className="flex flex-col text-white text-center">
            <h1 className="text-3xl font-bold mb-5">Training</h1>
            <p className="mb-4">Thorough training is a necessity when traveling to space. We offer all inclusive training for pre-flight and in-flight scenarios.</p>
            <button className="border border-white py-2 px-10 upper mx-auto"><Link to="/contact">Contact</Link></button>
        </div>
        <div>
          <div className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] border border-gray-600">
            <img src={a1} className="object-cover h-full w-full"/>
          </div>
          <div className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] border border-gray-600 translate-x-[100px] md:translate-x-[200px] translate-y-[-300px] md:translate-y-[-600px] bg-contain">
            <img src={a2} className="object-cover h-full w-full"/>
          </div>
        </div>
    </div>
  )
}

export default TrainingContent