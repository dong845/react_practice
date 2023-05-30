import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"


const Navbar = () => {
  const [status, setStatus] = useState(false);

  const [navbarBg, setNavbarBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, [navbarBg]);

  return (
    <div className="relative z-10">
        <div className={navbarBg? "fixed flex justify-between text-center w-full z-10 bg-black bg-opacity-70 py-5 px-5" : "fixed flex justify-between text-center w-full z-10 py-5 px-5"}>
            <h1 className="text-4xl md:text-5xl text-white font-bold"><Link to="/">Galaxy</Link></h1>
            <div>
                <ul className="hidden md:flex pt-3 pr-10">
                    <li className="text-white ml-5 text-center text-xl"><Link to="/">Home</Link></li>
                    <li className="text-white ml-5 text-center text-xl"><Link to="/pricing">Pricing</Link></li>
                    <li className="text-white ml-5 text-center text-xl"><Link to="/training">Training</Link></li>
                    <li className="text-white ml-5 text-center text-xl"><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="md:hidden pt-1">
                    <FaBars size="25" className="text-white" onClick={()=>setStatus(!status)}/>
                </div>
            </div>
        </div>

        {/* <div className="flex flex-col text-center pt-64 md:pt-72">
            <h1 className="text-white font-bold text-6xl pb-3">Galaxy. Travel.</h1>
            <h2 className="text-white text-4xl uppercase pb-5">World's first civilian space travel.</h2>
            <div>
                <button className="mr-2 text-white border w-40 py-2">TRAINING</button>
                <button className="mr-2 text-white border w-40 py-2 bg-gray-500 bg-opacity-90">LAUNCH</button>
            </div>
        </div> */}

        {status ? (
            <div className="bg-black bg-opacity-90 w-screen h-screen z-20 absolute top-0 left-0 md:hidden">
                <div className="flex justify-between pt-8 px-5 text-center">
                    <Link to="/"><h1 className="text-4xl text-white font-bold">Galaxy</h1></Link>
                    <FaTimes size="25" className="text-white" onClick={()=>setStatus(!status)} />
                </div>
                <div>
                    <ul className="flex flex-col text-center translate-y-1/2">
                        <li className="text-white text-2xl pt-6"><Link to="/" onClick={()=>setStatus(!status)}>Home</Link></li>
                        <li className="text-white text-2xl pt-6"><Link to="/pricing" onClick={()=>setStatus(!status)}>Pricing</Link></li>
                        <li className="text-white text-2xl pt-6"><Link to="/training" onClick={()=>setStatus(!status)}>Training</Link></li>
                        <li className="text-white text-2xl pt-6"><Link to="/contact" onClick={()=>setStatus(!status)}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        ) : ''}
    </div>
  )
}

export default Navbar