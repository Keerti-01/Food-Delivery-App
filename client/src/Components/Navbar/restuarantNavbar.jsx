import React from "react"
import {FaUserAlt} from "react-icons/fa"
import {HiLocationMarker} from "react-icons/hi"
import {IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/io"
import {RiSearch2Line} from "react-icons/ri"
import { AiOutlineArrowLeft } from "react-icons/ai"


//for mobile devices
const MobileNav = () => {
    return (
        
        <div className="flex w-full items-center justify-between lg:hidden">
            <AiOutlineArrowLeft />
            <div className="w-32 ">
                    <img src="../images/logo.png" alt="logo" className="w-full h-full" />
            </div>
            <div className="flex items-center gap-3">
                <button className="bg-app-300 text-white p-2 rounded-full">Login</button>
                <span className="border border-gray-300 text-app-400 rounded-full p-3">
                    <FaUserAlt />
                </span>
            </div>
        </div>
        
    )
}

const LargeNav = () => {
    return (
        <>
        <div className="hidden lg:inline container px-20 mx-auto">
            <div className="hidden lg:flex w-full items-center justify-between gap-4 ">
                <div className="w-52 ">
                    <img src="logo.png" alt="logo" className="w-full h-full" />
                </div>
                <div className="flex items-center gap-3 w-full bg-white shadow-md p-3 border border-gray-200 rounded">
                    <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
                        <span className="text-app-400"> <HiLocationMarker /> </span>
                        <input type="text" placeholder="Hyderabad" className="focus:outline-none"/>
                        <IoMdArrowDropdown />
                    </div>
                    <div className="flex items-center gap-2 w-3/4">
                        <RiSearch2Line />
                        <input type="search" placeholder="Search for restuarant, cuisine or a dish" 
                        className="w-full focus:outline-none "/>
                    </div>
                </div>
                <div className="flex gap-4  ml-20">
                    <button className="text-gray-500 hover:text-app-500 text-xl">LogIn</button>
                    <button className="text-gray-500 hover:text-app-500 text-xl">SignUp</button>
                </div>
            </div>
        </div>
        </>
    )
}



const RestuarantNavbar = () => {
    return (
        <>
            <nav className="p-4 flex items-center justify-between bg-white shadow-sm ">
                <MobileNav />
                <LargeNav />
                
            </nav>
        </>
    )
}

export default RestuarantNavbar;