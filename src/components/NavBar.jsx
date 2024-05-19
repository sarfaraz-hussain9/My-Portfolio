import React, { useState } from 'react'
import { FaBars} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { FaAffiliatetheme } from "react-icons/fa6";

const NavBar = () => {

    const [isopen,setisopen]=useState(false);
    const navLinks=[
        { link:"HOME",hrf:"#hero" },
        { link:"ABOUT",hrf:"#about" },
        { link:"PROJECT",hrf:"#project" },
    ];

  return (
    <>
        <nav className='fixed top-0 left-0 w-full z-10'>
            <div className=' bg-black px-4 lg:px-8 py-2 text-white flex justify-between flex-col lg:flex-row '>
                {/* logo */}
                <div className='text-2xl flex items-center gap-2 '>
                    <FaAffiliatetheme/>
                    <span className='font-semibold'>MY PORTFOLIO</span>
                </div>

                {/* menu icon */}
                <div onClick={()=>{setisopen(!isopen)}} className='cursor-pointer text-2xl absolute right-8 top-3 lg:hidden'>
                    {isopen ? <FaX/> : <FaBars/>}
                </div>

                {/* navlink */}
                <ul  className={`flex flex-col items-center w-full h-[250px] lg:h-auto lg:w-auto py-10 gap-3  lg:py-3 lg:flex-row lg:gap-8 absolute lg:static left-0  z-[-10] lg:z-0 bg-black transition-all duration-500 ease-in font-semibold ${isopen ? 'top-11' : 'top-[-520px]'}`}>
                {navLinks.map((e,i)=>(
                    <li onClick={()=>setisopen(!isopen)} key={i}><a href={e.hrf}>{e.link}</a></li>
                ))}
               <a  onClick={()=>setisopen(!isopen)} href="#contact"> <button className='bg-blue-600 rounded px-8 py-1'>CONTACT</button></a>
                </ul>
               
            </div>
           
        </nav>
    </>
  )
}

export default NavBar