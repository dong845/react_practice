import React from 'react'

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="w-full bg-slate-900 pt-10">
        <div className="flex flex-col mx-20">
            <div className="flex flex-col md:flex-row pb-4 border-b-2 border-slate-400">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-20 z-10 mr-10">
                    <div className="flex flex-col text-white">
                        <h2 className="uppercase text-white pb-3 text-lg">Solutions</h2>
                        <div className="pl-4 mb-5">
                            <p className="py-1 text-md">Analytics</p>
                            <p className="py-1 text-md">Marketing</p>
                            <p className="py-1 text-md">Commerce</p>
                            <p className="py-1 text-md">Data</p>
                            <p className="py-1 text-md">Cloud</p>
                        </div>
                    </div>

                    <div className="flex flex-col text-white">
                        <h2 className="uppercase text-white pb-3 text-lg">Support</h2>
                        <div className="pl-4 mb-5">
                            <p className="py-1 text-md">Pricing</p>
                            <p className="py-1 text-md">Documentation</p>
                            <p className="py-1 text-md">Guides</p>
                            <p className="py-1 text-md">API Status</p>
                        </div>
                    </div>

                    <div className="flex flex-col text-white">
                        <h2 className="uppercase text-white pb-3 text-lg">Company</h2>
                        <div className="pl-4 mb-5">
                            <p className="py-1 text-md">About</p>
                            <p className="py-1 text-md">Blog</p>
                            <p className="py-1 text-md">Jobs</p>
                            <p className="py-1 text-md">Press</p>
                            <p className="py-1 text-md">Partners</p>
                        </div>
                    </div>

                    <div className="flex flex-col text-white">
                        <h2 className="uppercase text-white pb-3 text-lg">Legal</h2>
                        <div className="pl-4 mb-5">
                            <p className="py-1 text-md">Clain</p>
                            <p className="py-1 text-md">Privact</p>
                            <p className="py-1 text-md">Policies</p>
                            <p className="py-1 text-md">Terms</p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col text-white z-10">
                    <p className="uppercase text-lg font-bold pb-8">Subscribe to our newsletter</p>
                    <p className="text-md mb-6">The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <div className="flex">
                        <input className="w-full text-gray-500 text-md p-2 rounded-xl mr-4" type="text" placeholder="Enter your email"/>
                        <button className="text-white bg-indigo-600 p-2 rounded-xl">Subscribe</button>
                    </div>
                </div>

            </div>

            <div className="flex flex-col md:flex-row justify-between py-5 items-center">
                <p className="text-white">2022 Workflow, LLC. All rights reserved.</p>
                <div className="flex py-3">
                    <FaFacebook className="w-10 text-white" />
                    <FaGithub className="w-10 text-white"/>
                    <FaInstagram className="w-10 text-white"/>
                    <FaTwitter className="w-10 text-white"/>
                    <FaTwitch className="w-10 text-white"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer