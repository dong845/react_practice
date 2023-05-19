import React, {useState} from 'react'
import { Link, animateScroll as scroll, } from 'react-scroll'
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  return (
    <div className="w-screen h-[80px] z-20 bg-zinc-200 fixed drop-shadow-lg">
        <div className="px-8 flex justify-between items-center w-full h-full">
            <div className="flex items-center">
                <h1 className="text-4xl font-bold md:text-5xl">BRAND.</h1>
                <ul className="hidden md:flex">
                  <li className="mx-5"><Link to="home" smooth={true} duration={500}>Home</Link></li>
                  <li className="mx-5"><Link to="about" smooth={true} offset={-100} duration={500}>About</Link></li>
                  <li className="mx-5"><Link to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
                  <li className="mx-5"><Link to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
                  <li className="mx-5"><Link to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
                </ul>
            </div>
            <div className="hidden md:items-center md:flex">
              <button className="mr-3 border-indigo-500 py-2 px-4 rounded-lg text-black">Sign In</button>
              <button className="mr-5 bg-indigo-500 py-2 px-4 rounded-lg text-white">Sign Up</button>
            </div>
            <div className="md:hidden">
              {!nav ? <MenuIcon className="w-8" onClick={()=>setNav(!nav)}/> : <XIcon className="w-8" onClick={()=>setNav(!nav)}/>}
            </div>
        </div>

        <ul className={ !nav? 'hidden' : "sm:hidden absolute w-full bg-zinc-200 transition duration-200"}>
          <li className="mx-4 border-b-2 border-zinc-300 w-full text-2xl my-2"><Link onClick={()=>setNav(!nav)} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className="mx-4 border-b-2 border-zinc-300 w-full text-2xl my-2"><Link onClick={()=>setNav(!nav)} to="about" smooth={true} offset={-100} duration={500}>About</Link></li>
          <li className="mx-4 border-b-2 border-zinc-300 w-full text-2xl my-2"><Link onClick={()=>setNav(!nav)} to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
          <li className="mx-4 border-b-2 border-zinc-300 w-full text-2xl my-2"><Link onClick={()=>setNav(!nav)} to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
          <li className="mx-4 border-b-2 border-zinc-300 w-full text-2xl my-2"><Link onClick={()=>setNav(!nav)} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
          <div className="flex flex-col items-center">
            <button className="w-[50%] text-xl my-2 py-2">Sign In</button>
            <button className="w-[50%] text-xl mb-4 mt-2 bg-indigo-500 rounded-lg py-2 text-white">Sign Up</button>
          </div>
        </ul>
    </div>
  )
}

export default Navbar