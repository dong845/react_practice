import React from 'react'

const ContactContent = () => {
  return (
    <div className="flex flex-col py-5 mx-auto">
        <div className="text-start">
            <p className="text-white pb-3">Your Name</p>
            <input type="text" className="bg-gray-800 w-[400px] md:w-[800px] py-2 border border-gray-600 mb-3" />
        </div>

        <div className="text-start">
            <p className="text-white pb-3">Email</p>
            <input type="text" className="bg-gray-800 w-[400px] md:w-[800px] py-2 border border-gray-600 mb-3" />
        </div>

        <div className="text-start">
            <p className="text-white pb-3">Subject</p>
            <input type="text" className="bg-gray-800 w-[400px] md:w-[800px] py-2 border border-gray-600 mb-3" />
        </div>

        <div className="text-start">
            <p className="text-white pb-3">Details</p>
            <textarea type="text" className="bg-gray-800 w-[400px] md:w-[800px] h-64 py-2 border border-gray-600 px-3" placeholder="Type a short message here" />
        </div>
    </div>
  )
}

export default ContactContent