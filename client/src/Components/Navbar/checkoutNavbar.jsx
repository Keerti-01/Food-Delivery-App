import React from "react"
import {FaUserAlt} from "react-icons/fa"
import { AiOutlineArrowLeft } from "react-icons/ai"


const CheckoutNavbar = () => {
    return (
        <>
        <nav className="p-4 flex items-center justify-between bg-white shadow-sm ">
        <div className="container px-4 md:px-20 mx-auto">
        <div className="flex w-full items-center justify-between ">
            <AiOutlineArrowLeft />
            <div className="w-32 ">
                    <img src="logo.png" alt="logo" className="w-full h-full" />
            </div>
            <div className="flex items-center gap-3">
                
                <span className="border flex items-center gap-2 
                border-gray-300 text-app-400 rounded-full p-3">
                    <FaUserAlt /> 
                </span>
                Keerti
            </div>
        </div>
        </div>
        </nav>
        </>
    )
}

export default CheckoutNavbar;