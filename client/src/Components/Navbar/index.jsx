import React,{useState} from "react"
import {FaUserAlt} from "react-icons/fa"
import {HiLocationMarker} from "react-icons/hi"
import {IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/io"
import {RiSearch2Line} from "react-icons/ri"

//compoenents
import SignIn from "../Auth/SignIn"
import SignUp from "../Auth/SignUp"

//for mobile devices
const MobileNav = ({ SignIn, SignUp }) => {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    
    return (
        
        <div className="flex w-full items-center justify-between lg:hidden">
            <div className="w-32 ">
                    <img src="logo.png" alt="logo" className="w-full h-full" />
            </div>
            <div className="flex items-center gap-3 relative">
                <button className="bg-app-300 text-white p-2 rounded-full">Login</button>
                
                <span onClick={ () => setIsDropDownOpen((prev) => !prev)} 
                    className="border border-gray-300 text-app-400 rounded-full p-3">
                    <FaUserAlt />
                </span>
                {
                    isDropDownOpen && (
                        <div className="absolute -bottom-20 -right-2 w-full bg-white z-20 flex flex-col gap-2
                            border border-gray-400 rounded shadow-lg py-2">
                            <button onClick={ SignIn }
                                className="text-gray-500 text-base hover:text-app-400"
                            >Sign In</button>
                            <hr />
                            <button onClick={ SignUp }
                                className="text-gray-500 text-base hover:text-app-400"
                            >Sign Up</button>
                        </div>
                    )
                }
                </div>
            </div>
        
        
    )
}

const LargeNav = ({SignIn, SignUp}) => {
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
                    <button onClick={SignIn}
                        className="text-gray-500 hover:text-app-500 text-xl">
                        LogIn
                    </button>
                    <button onClick={SignUp}
                        className="text-gray-500 hover:text-app-500 text-xl">SignUp</button>
                </div>
            </div>
        </div>
        </>
    )
}



const Navbar = () => {
    const [openSignIn, setOpenSignIn] = useState(false)
    const [openSignUp, setOpenSignUp] = useState(false)

    const openSignInModal = () => setOpenSignIn(true)
    const openSignUpModal = () => setOpenSignUp(true)

    return (
        <>
            <SignIn isOpen={openSignIn} setIsOpen={setOpenSignIn} />
            <SignUp isOpen={openSignUp} setIsOpen={setOpenSignUp} />

            <nav className="p-4 flex items-center justify-between bg-white shadow-sm ">
                <MobileNav SignIn={openSignInModal} SignUp={openSignUpModal} />
                <LargeNav SignIn={openSignInModal} SignUp={openSignUpModal} />
                
            </nav>
        </>
    )
}

export default Navbar;