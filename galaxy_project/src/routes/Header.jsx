import React from 'react'
import Navbar from '../components/Navbar'
import galaxy from '../assets/galaxy.mp4'
import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent'

const Header = () => {
  return (
    <>
        <Navbar />
        <div className="fixed inset-0 flex items-center justify-center min-h-screen min-w-full overflow-hidden z-0">
          <video autoPlay muted loop src={galaxy} className="absolute w-auto min-w-full min-h-full max-w-none">
          </video>
        </div>
        <HomeContent />
        <div className="w-screen grid grid-cols-1 md:grid-cols-2 gap-30 absolute top-full bg-black bg-opacity-90 px-30 md:px-60 z-10 text-center">
          <Footer />
        </div>
        {/* <div className="w-screen grid grid-cols-1 md:grid-cols-2 gap-30 absolute top-full bg-black bg-opacity-90 px-30 md:px-60 z-10 text-center">
          <div className="flex flex-col py-20">
            <div className="flex text-center py-4">
              <AiOutlineSearch size="50" className="text-white text-center pr-4"/>
              <div className="flex flex-col text-start">
                <p className="text-lg text-white pb-3">123 Acme St.</p>
                <p className="text-xl font-bold text-white">Houston, TX</p>
              </div>
            </div>

            <div className="flex pb-4">
              <AiOutlinePhone size="50" className="text-white pr-4"/>
              <p className="text-xl text-white font-bold text-center py-2">+1 800-944-1234</p>
            </div>

            <div className="flex pb-4">
              <AiOutlineMail size="50" className="text-white pr-4"/>
              <p className="text-xl text-white font-bold text-center py-2">trips@galaxy.com</p>
            </div>
          </div>

          <div className="flex flex-col py-20 text-start">
            <h2 className="text-white font-bold py-4 text-xl">About the company</h2>
            <p className="text-white text-md w-100 text-start pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al. Ut enim ad minim veniam, quis nostr.</p>
            <div className="flex pb-4">
              <AiOutlineFacebook size="40" className="text-white pr-3"/>
              <AiOutlineTwitter  size="40" className="text-white pr-3"/>
              <AiOutlineLinkedin size="40" className="text-white pr-3"/>
            </div>
          </div>
        </div> */}

    </>
  )
}

export default Header