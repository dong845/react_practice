import React from 'react'
import { AiOutlineSearch,AiOutlinePhone,AiOutlineMail, AiOutlineFacebook, AiOutlineTwitter, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <>
        <div className="flex flex-col py-20 mx-auto">
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

        <div className="flex flex-col py-20 container px-5">
            <div className="text-start">
                <h2 className="text-white font-bold py-4 text-xl">About the company</h2>
                <p className="text-white text-md w-100 text-start pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al. Ut enim ad minim veniam, quis nostr.</p>
                <div className="flex pb-4">
                    <AiOutlineFacebook size="40" className="text-white pr-3"/>
                    <AiOutlineTwitter  size="40" className="text-white pr-3"/>
                    <AiOutlineLinkedin size="40" className="text-white pr-3"/>
                </div>
            </div>
        </div>
    </>

  )
}

export default Footer