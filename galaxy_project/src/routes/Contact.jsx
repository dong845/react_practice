import React from 'react'
import Navbar from '../components/Navbar'
import stars from '../assets/stars.png'
import Footer from '../components/Footer'
import ContactContent from '../components/ContactContent'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <div>
            <img src={stars} className="w-screen h-screen bg-bo-repeat bg-center bg-contain"/>
        </div>
        <div className="w-full absolute top-1/4 z-5 text-center">
            <h1 className="text-white font-bold text-5xl pb-2">CONTACT.</h1>
            <p className="text-white text-2xl">Contact GLX Travel.</p>
        </div>
        <div className="w-full bg-black absolute top-3/4 py-10 flex flex-col">
            <ContactContent />
            <div className="w-screen grid grid-cols-1 md:grid-cols-2 gap-30 absolute top-full bg-black px-30 md:px-60 z-10 text-center mx-auto">
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default Contact